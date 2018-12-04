import {Unit} from './Unit'

export class Marine extends Unit {
	constructor(name, id) {
		super(name, id)
		this.type = "Marine"
	}
}