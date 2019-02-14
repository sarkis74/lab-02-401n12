'use strict';

const FishFactory = ({name, fins}) => ({
    name,
    fins,
    swim() {
        return 'Swimming';
    },
    eggs() {
        return 'Laying eggs';
    },

});

module.exports = FishFactory;