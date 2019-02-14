'use strict';

class Fish {
    constructor(name, fins) {
        this.name = name;
        this.fins = fins;
    }
    swim() {
        return 'Swimming';
    }
    eggs() {
        return 'Laying eggs';
    }
};

module.exports = Fish;