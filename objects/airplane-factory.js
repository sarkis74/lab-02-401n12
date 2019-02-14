'use strict';


const AirplaneFactory = ({name, wings}) => ({
    name,
    wings,
    fly() {
        return 'Flying high';
    },
    land() {
        return 'Landing';
    },


});

module.exports = AirplaneFactory;