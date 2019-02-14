'use strict';

const SeaCreature = function(name, fins) {
    this.name = name;
    this.fins = fins;
};

SeaCreature.prototype.swim = () => {
    return 'Swimming';
};

SeaCreature.prototype.eggs = () => {
    return 'Laying eggs';
};

// Fish Constructor
const Fish = function(name) {
    SeaCreature.call(this, name, 2);
};

Fish.prototype = new SeaCreature();

const Lobster = function(name) {
    SeaCreature.call(this,name,0);
};

Lobster.prototype = new SeaCreature();

Lobster.prototype.crawl = () => {
    return 'Crawling';
};

module.exports = {Fish, Lobster};