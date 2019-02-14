'use strict';

class Helicopter {
    constructor(name, wings) {
        this.name = 'helicopter';
        this.wings = 0;
    }
    fly() {
        return 'Flying high';
    }
    land() {
        return 'Landing';
    }
    hover() {
        return 'Hovering low';
    }
};

module.exports = Helicopter;