export class Unit {
	constructor(name, id) {
		this.name = name
		this.id = id
		this.type = ""
	}

	asHTMLRow() {
		return `<div class='row' data-unitType='${this.type}'>${this.type} #${this.id}: ${this.name}</div>`
	}
}