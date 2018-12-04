import {Unit} from './Unit'

export class Valkyrie extends Unit {
	constructor(name, id) {
		super(name, id)
		this.type = "Valkyrie"
	}
}