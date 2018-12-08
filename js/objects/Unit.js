export class Unit {
	constructor(name, id) {
		this.name = name
		this.id = id
		this.type = ""
	}

	asHTMLRow() {
		return `<div class='row unit-row' data-unitName='${this.name}' data-unitType='${this.type}' data-unitId='${this.id}' onclick='selectUnit(this)'>
			<span class="col-md-10">${this.type} #${this.id}: ${this.name}</span>
		</div>`
	}
}