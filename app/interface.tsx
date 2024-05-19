class point {
    x: number = 2

}

const pt = new point()

function printMessage() {
    console.log("Hello")
}


interface myInterface {
    calculateDOB(): number
}

const testFunction = () => {
    return 0;
}


class person implements myInterface {

    age: number
    name: string

    constructor(age:number, name: string) {
        this.age = age
        this.name = name
    }

    currentYear: number  = 2024

    calculateDOB(): number {
        return 23 - this.currentYear
    }

}

function main() {
    let newVar = new person(20, "reu")
    newVar.age = 20

}


