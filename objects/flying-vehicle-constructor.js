'use strict';

const FlyingVehicle = function(name, wings) {
    this.name = name;
    this.wings = wings;
};

FlyingVehicle.prototype.fly = () => {
    return 'Flying high';
};

FlyingVehicle.prototype.land = () => {
    return 'Landing';
};

// Airplane Constructor
const Airplane = function(name) {
    FlyingVehicle.call(this, name, 2);
};

Airplane.prototype = new FlyingVehicle();

const Helicopter = function(name) {
    FlyingVehicle.call(this,name,0);
};

Helicopter.prototype = new FlyingVehicle();

Helicopter.prototype.hover = () => {
    return 'Hovering low';
};

module.exports = {Airplane, Helicopter};