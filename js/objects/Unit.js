export class Unit {
	constructor(name, id) {
		this.name = name
		this.id = id
		this.type = ""
	}

	asHTMLRow() {
		return `<div class='row'>${this.type} #${this.id}: ${this.name}</div>`
	}
}