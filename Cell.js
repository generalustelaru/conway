
class Cell {

    static directions = [
        {x: 0, y: -1},
        {x: 1, y: -1},
        {x: 1, y: 0},
        {x: 1, y: 1},
        {x: 0, y: 1},
        {x: -1, y: 1},
        {x: -1, y: 0},
        {x: -1, y: -1}
    ]
    static pickDirection() {
        const roll = Math.round(Math.random() * 7)
        return directions[roll]
    }

    cellElement = undefined
    id = undefined
    position = {
        x: undefined,
        y: undefined
    }
    energy = 20

    constructor(id, position) {
        this.id = id
        this.position = position
        this.cellElement = document.createElement('div')
        this.cellElement.className = 'cell'
        this.cellElement.id = id
        this.cellElement.style.marginLeft = position.x + 'px'
        this.cellElement.style.marginTop = position.y + 'px'
        worldElement.appendChild(this.cellElement)
    }

    getCellData() {
        return {
            id: this.id,
            position: this.position,
            energy: this.energy
        }
    }

    // move() {
    //     const movement = pickDirection()
    //     this.position.x += movement.x
    //     this.position.y += movement.y
    // }


}