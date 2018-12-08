import { Unit } from './objects/Unit'
import { Marine } from './objects/Marine'
import { SiegeTank } from './objects/SiegeTank'
import { Valkyrie } from './objects/Valkyrie'

alert('Good luck, Commander!')
let usedIds = []
let selectedUnitContext = null

const unitForm = document.querySelector("#unitForm")
const unitType = document.querySelector("#unitTypeField")
const unitRecap = document.querySelector("#unitRecap")

const unitDataId = document.querySelector("#unitDataId")
const unitDataName = document.querySelector("#unitDataName")
const unitDataType = document.querySelector("#unitDataType")
const unitDataPortrait = document.querySelector("#unitDataPortrait")
const deleteBtn = document.querySelector("#deleteBtn")

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

deleteBtn.addEventListener("click", () => {
	const unitId = selectedUnitContext.getAttribute("data-unitId")
	const unitName = selectedUnitContext.getAttribute("data-unitName")
	const unitType = selectedUnitContext.getAttribute("data-unitType")
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
		selectedUnitContext.remove()
		selectedUnitContext = null
		clearUnitData()
	}
})

const displayUnit = (unit) => {
	unitRecap.innerHTML += unit.asHTMLRow()
}

const confirmRemoval = (unitName, unitType) => {
	if (unitType !== "Valkyrie") {
		return true
	}
	return confirm(`Commander, without meaning any disrespect to you, this choice seems a bit hazardous!\n\nAre you really certain you want to destroy the Valkyrie ${unitName}?`)
}

const generateId = () => {
	for (let i = 0; i <= 99999; i++) {
		if (!usedIds.includes(i)) {
			return i
		}
	}
}

const clearUnitData = () => {
	unitDataId.innerHTML = ""
	unitDataName.innerHTML = ""
	unitDataType.innerHTML = ""
	unitDataPortrait.setAttribute("src", "")
	deleteBtn.setAttribute("disabled", true)
}

window.selectUnit = (context) => {
	selectedUnitContext = context
	const unitId = selectedUnitContext.getAttribute("data-unitId")
	const unitName = selectedUnitContext.getAttribute("data-unitName")
	const unitType = selectedUnitContext.getAttribute("data-unitType")

	unitDataId.innerHTML = unitId
	unitDataName.innerHTML = unitName
	unitDataType.innerHTML = unitType
	unitDataPortrait.setAttribute("src", `../resources/images/${unitType}Portrait.gif`)
	deleteBtn.removeAttribute("disabled")
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