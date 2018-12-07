import {Unit} from './Unit'

export class SiegeTank extends Unit {
	constructor(name, id, siegeMode) {
		super(name, id)
		this.type = "Siege Tank"
		this.siegeMode = siegeMode
	}

	asHTMLRow() {
		return `<div class='row' data-unitName='${this.name}' data-unitType='${this.type}' data-unitId='${this.id}' onclick='removeUnit(this)'>${this.type} #${this.id}: ${this.name} (${this.siegeMode})</div>`
	}

	static playReadySound() {
		new Audio('../../resources/sound/SiegeTankReady.oga').play()
	}

	static playDeathSound() {
		new Audio(`../../resources/sound/SiegeTankDeath.oga`).play()
	}
}