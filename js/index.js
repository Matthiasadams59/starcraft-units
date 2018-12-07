import { Unit } from './objects/Unit'
import { Marine } from './objects/Marine'
import { SiegeTank } from './objects/SiegeTank'
import { Valkyrie } from './objects/Valkyrie'

alert('Good luck, Commander!')
let usedIds = []

const unitForm = document.querySelector("#unitForm")
const unitType = document.querySelector("#unitTypeField")
const unitRecap = document.querySelector("#unitRecap")

unitForm.addEventListener("submit", (event) => {
	event.preventDefault()
	const name = document.getElementById("unitNameField").value
	const type = unitType.value
	const id = generateId()
	let unit = null
	if (id !== undefined) {
		switch (type) {
			case "Marine":
				unit = new Marine(name, id)
				break
			case "Siege Tank":
				const siegeMode = document.querySelector('input[name="unitSiegeMode"]:checked').value
				unit = new SiegeTank(name, id, siegeMode)
				break
			case "Valkyrie":
				unit = new Valkyrie(name, id)
				break
		}
		usedIds.push(id)
		unit.constructor.playReadySound()
		displayUnit(unit)
	} else {
		alert("Commander, you can't train more units!")
	}
})

unitType.addEventListener("change", () => {
	const siegeMode = document.querySelector("#siegeTankMode")
	if (unitType.value === "Siege Tank") {
		siegeMode.removeAttribute("hidden")
		siegeMode.firstElementChild.required = true
	} else {
		siegeMode.setAttribute("hidden", true)
		siegeMode.firstElementChild.required = false
	}
})

const displayUnit = (unit) => {
	unitRecap.innerHTML += unit.asHTMLRow()
}

const confirmRemoval = (unitName, unitType) => {
	if (confirm(`Are you sure you want to remove the ${unitType} ${unitName}?`)) {
		if (unitType !== "Valkyrie") {
			return true
		}
		return confirm(`Commander, without meaning any disrespect to you, this choice seems a bit hazardous!\n\nAre you really certain you want to destroy the Valkyrie ${unitName}?`)
	}
}

const generateId = () => {
	for (let i = 0; i <= 99999; i++) {
		if (!usedIds.includes(i)) {
			return i
		}
	}
}

window.removeUnit = (context) => {
	const unitId = context.getAttribute("data-unitId")
	const unitName = context.getAttribute("data-unitName")
	const unitType = context.getAttribute("data-unitType")
	if (confirmRemoval(unitName, unitType)) {
		switch (unitType) {
			case "Marine":
				Marine.playDeathSound()
				break
			case "Siege Tank":
				SiegeTank.playDeathSound()
				break
			case "Valkyrie":
				Valkyrie.playDeathSound()
				break
		}
		usedIds.splice(usedIds.indexOf(parseInt(unitId, 10)), 1)
		context.remove()
	}
}