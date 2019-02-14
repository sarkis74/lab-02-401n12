'use strict';


const MotorcycleFactory = ({name, wheels}) => ({
    name,
    wheels,
    drive() {
        return 'Moving forward';
    },
    stop() {
        return 'Stopping';
    },
    wheelie() {
        return 'Can do a wheelie';
    }

});

module.exports = MotorcycleFactory;