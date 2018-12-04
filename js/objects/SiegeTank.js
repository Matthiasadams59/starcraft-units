import {Unit} from './Unit'

export class SiegeTank extends Unit {
	constructor(name, id, siegeMode) {
		super(name, id)
		this.type = "Siege Tank"
		this.siegeMode = siegeMode
	}

	asHTMLRow() {
		return `<div class='row'>${this.type} #${this.id}: ${this.name} (${this.siegeMode})</div>`
	}
}