'use strict';

class Car {
    constructor(name, wheels) {
    this.name = 'car';
    this.wheels = 4;
    }
    drive() {
        return 'Moving forward';
    }
    stop() {
        return 'Stopping';
    }
};

module.exports = Car;


