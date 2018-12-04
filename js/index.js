import {Unit} from './objects/Unit'
import {Marine} from './objects/Marine'
import {SiegeTank} from './objects/SiegeTank'
import {Valkyrie} from './objects/Valkyrie'

alert('Good luck, Commander!')
let idCounter = 0

const unitForm = document.querySelector("#unitForm")
const unitRecap = document.querySelector("#unitRecap")
const unitType = document.querySelector("#unitTypeField")

unitForm.addEventListener("submit", (event) => {
	event.preventDefault()
	const data = new FormData(unitForm)
	const name = document.getElementById("unitNameField").value
	const type = unitType.value
	let unit = null
	let audio = null
	switch (type) {
		case "Marine":
			unit = new Marine(name, idCounter)
			audio = new Audio('../resources/sound/MarineReady.oga')
			break
		case "Siege Tank":
			const siegeMode = document.querySelector('input[name="unitSiegeMode"]:checked').value
			unit = new SiegeTank(name, idCounter, siegeMode)
			audio = new Audio('../resources/sound/SiegeTankReady.oga')
			break
		case "Valkyrie":
			unit = new Valkyrie(name, idCounter)
			audio = new Audio('../resources/sound/ValkyrieReady.oga')
			break
	}
	audio.play()
	idCounter++
	displayUnit(unit)
})

unitType.addEventListener("change", () => {
	const siegeMode = document.querySelector("#siegeTankMode")
	if(unitType.value === "Siege Tank") {
		siegeMode.removeAttribute("hidden")
		siegeMode.firstElementChild.required = true
	} else {
		siegeMode.setAttribute("hidden", true)
		siegeMode.firstElementChild.required = false
	}
})

const displayUnit = (unit) => {
	document.getElementById("unitRecap").innerHTML +=unit.asHTMLRow()
}