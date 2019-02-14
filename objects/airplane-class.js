'use strict';

class Airplane {
    constructor(name, wings) {
        this.name = 'plane';
        this.wings = 2;
    }
    fly() {
        return 'Flying high';
    }
    land() {
        return 'Landing';
    }
};

module.exports = Airplane;
