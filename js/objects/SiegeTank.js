import {Unit} from './Unit'

export class SiegeTank extends Unit {
	constructor(name, id, siegeMode) {
		super()
		this.type = "Siege Tank"
		this.siegeMode = siegeMode
	}
}