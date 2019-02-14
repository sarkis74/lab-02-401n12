'use strict';

const LobsterFactory = ({name, fins}) => ({
    name,
    fins,
    swim() {
        return 'Swimming';
    },
    eggs() {
        return 'Laying eggs';
    },
    crawl() {
        return 'Crawling';
    }

});

module.exports = LobsterFactory;