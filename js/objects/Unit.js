export class Unit {
	constructor(name, id) {
		this.name = name
		this.id = id
		this.type = ""
	}

	asHTMLRow() {
		return `<div class='row' data-unitName='${this.name}' data-unitType='${this.type}' data-unitId='${this.id}' onclick='removeUnit(this)'>${this.type} #${this.id}: ${this.name}</div>`
	}
}