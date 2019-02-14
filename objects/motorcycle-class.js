'use strict';

class Motorcycle {
    constructor(name, wheels) {
        this.name = 'motorcycle';
        this.wheels = 2;
    }
    drive() {
        return 'Moving forward';
    }
    stop() {
        return 'Stopping';
    }
    wheelie() {
        return 'Can do a wheelie';
    }
};

module.exports = Motorcycle;