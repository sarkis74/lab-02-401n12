'use strict';

const CarFactory = ({name, wheels}) => ({
    name,
    wheels,
    drive() {
        return 'Moving forward';
    },
    stop() {
        return 'Stopping';
    },

});

module.exports = CarFactory;