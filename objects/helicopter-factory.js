'use strict';


const HelicopterFactory = ({name, wings}) => ({
    name,
    wings,
    fly() {
        return 'Flying high';
    },
    land() {
        return 'Landing';
    },
    hover() {
        return 'Hovering';
    }

});

module.exports = HelicopterFactory;