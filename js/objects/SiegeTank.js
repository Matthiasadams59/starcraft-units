import {Unit} from './Unit'

export class SiegeTank extends Unit {
	constructor(name, id, siegeMode) {
		super(name, id)
		this.type = "Siege Tank"
		this.siegeMode = siegeMode
	}

	asHTMLRow() {
		return `<div class='row unit-row' data-unitName='${this.name}' data-unitType='${this.type}' data-unitId='${this.id}' onclick='selectUnit(this)'>
			<span class="col-md-10">${this.type} #${this.id}: ${this.name} (${this.siegeMode})</span>
		</div>`
	}

	static playReadySound() {
		new Audio('../../resources/sound/SiegeTankReady.oga').play()
	}

	static playDeathSound() {
		new Audio(`../../resources/sound/SiegeTankDeath.oga`).play()
	}
}