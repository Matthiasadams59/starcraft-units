import {Unit} from './Unit'

export class Valkyrie extends Unit {
	constructor(name, id) {
		super(name, id)
		this.type = "Valkyrie"
	}

	static playReadySound() {
		new Audio('../../resources/sound/ValkyrieReady.oga').play()
	}

	static playDeathSound() {
		new Audio(`../../resources/sound/ValkyrieDeath.oga`).play()
	}
}