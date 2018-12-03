import {Unit} from './objects/Unit'
import {Marine} from './objects/Marine'
import {SiegeTank} from './objects/SiegeTank'
import {Valkyrie} from './objects/Valkyrie'

alert('Good luck, Commander!')
let idCounter = 0
let  battlefield = []


const addUnit = () => {
	const name = document.getElementById("unitNameField").value
	const type = document.getElementById("unitTypeField").value
	const unit = null
	switch (type) {
		case "Marine":
			unit = new Marine(name, idCounter)
			break
		case "Siege Tank":
			const siegeMode = document.getElementById("unitSiegeMode")
			unit = new SiegeTank(name, idCounter, siegeMode)
			break
		case "Valkyrie":
			unit = new Valkyrie(name, idCounter)
			break
	}
	battlefield.add(unit)
	idCounter++
	return unit
}