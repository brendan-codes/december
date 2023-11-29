let unit = {
    name: "Hoppers",
    wounds: "2",
    movement: "d6+10",
    bravery: "4",
    save: "6+"
}


class Unit {
    constructor(name, wounds, movement, bravery, save){
        this.name = name;
        this.wounds = wounds;
        this.movement = movement;
        this.bravery = bravery;
        this.save = save;
    }

    sayName(){
        console.log(this.name);
    }
}

class Monster extends Unit {
    constructor(name, wounds, movement, bravery, save){
        super(name, wounds, movement, bravery, save);
    }
}

let myUnit = new Unit("Hopper", 2, "d6+10", 4, 6);
console.log(myUnit);

myUnit.sayName();


Array