import {Unit} from './Unit'

export class Marine extends Unit {
	constructor(name, id) {
		super(name, id)
		this.type = "Marine"
	}

	static playReadySound() {
		new Audio('../../resources/sound/MarineReady.oga').play()
	}

	static playDeathSound() {
		new Audio(`../../resources/sound/MarineDeath.oga`).play()
	}
}