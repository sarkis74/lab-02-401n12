'use strict';

// const Car = require('../car-factory');
//  const Motorcycle = require('../motorcycle-factory');
// const Airplane = require('../airplane-factory')
// const Helicopter = require('../helicopter-factory')
const Fish = require('../fish-factory')
const Lobster = require('../lobster-factory')

//
// describe('Vehicles', () => {
//
//     describe('Car', () => {
//
//         let car = Car({name: 'sedan', wheels: 4});
//
//         it('has 4 wheels', () => {
//             expect(car.wheels).toEqual(4);
//         });
//
//         it('can drive', () => {
//             expect(car.drive()).toBeTruthy();
//         });
//
//         it('can stop', () => {
//             expect(car.stop()).toBeTruthy();
//         });
//
//         it('cannot do a wheelie', () => {
//             expect(car.wheelie).toBeUndefined();
//         });
//     })
//
//
//     describe('Motorcycle', () => {
//
//         let motorcycle = Motorcycle({name: 'scooter', wheels: 2});
//
//         it('has 2 wheels', () => {
//             expect(motorcycle.wheels).toEqual(2);
//         });
//
//         it('can drive', () => {
//             expect(motorcycle.drive()).toBeTruthy();
//         });
//
//         it('can stop', () => {
//             expect(motorcycle.stop()).toBeTruthy();
//         });
//
//         it('cannot do a wheelie', () => {
//             expect(motorcycle.wheelie()).toBeTruthy();
//         });
//
//     });
// });

// describe('Flying Vehicles', () => {
//
//     describe('Airplane', () => {
//
//         let airplane = Airplane({name: 'jet', wings: 2});
//
//         it('has 2 wings', () => {
//             expect(airplane.wings).toEqual(2);
//         });
//
//         it('can fly', () => {
//             expect(airplane.fly()).toBeTruthy();
//         });
//
//         it('can land', () => {
//             expect(airplane.land()).toBeTruthy();
//         });
//
//         it('cannot hover', () => {
//             expect(airplane.hover).toBeUndefined();
//         });
//     })
//     describe('Helicopter', () => {
//
//         let helicopter = Helicopter({name: 'Apache', wings: 0});
//
//         it('has 0 wings', () => {
//             expect(helicopter.wings).toEqual(0);
//         });
//
//         it('can fly', () => {
//             expect(helicopter.fly()).toBeTruthy();
//         });
//
//         it('can land', () => {
//             expect(helicopter.land()).toBeTruthy();
//         });
//
//         it('cannot hover', () => {
//             expect(helicopter.hover).toBeTruthy();
//         });
//     })
//
// });

describe('Sea Creature', () => {

    describe('Fish', () => {

        let fish = Fish({name: 'shark', fins: 2});

        it('has 2 fins', () => {
            expect(fish.fins).toEqual(2);
        });

        it('can swim', () => {
            expect(fish.swim()).toBeTruthy();
        });

        it('can lay eggs', () => {
            expect(fish.eggs()).toBeTruthy();
        });

        it('can crawl', () => {
            expect(fish.crawl).toBeUndefined();
        });
    })
    describe('Lobster', () => {

        let lobster = Lobster({name: 'New England', fins: 0});

        it('has 0 fins', () => {
            expect(lobster.fins).toEqual(0);
        });

        it('can swim', () => {
            expect(lobster.swim()).toBeTruthy();
        });

        it('can land', () => {
            expect(lobster.eggs()).toBeTruthy();
        });

        it('can crawl', () => {
            expect(lobster.crawl).toBeTruthy();
        });
    })

});
