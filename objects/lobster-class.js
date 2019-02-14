'use strict';

class Lobster {
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
    crawl() {
        return 'Crawling';
    }
};

module.exports = Lobster;