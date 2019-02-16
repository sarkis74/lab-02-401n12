'use strict';

// These 2 should be interchangeable!
const List = require('../list-constructor');
// const List = require('../list-constructor.js');

describe('List Data Structure', () => {

    it('starts with a length of -1 and an empty data set', () => {
        let stuff = new List();
        expect(stuff.length).toEqual(0);
        expect(stuff.data).toEqual([]);
    });

    it('pushes items to the end of the data set', () => {
        let stuff = new List();
        stuff.push('a');
        stuff.push('b');
        expect(stuff.data.length).toEqual(2);
        expect(stuff.data[1]).toEqual('b');
    });

    it('pops one item from the end of the data set', () => {
        let stuff = new List('a', 'b');
        stuff.data.pop();
        expect(stuff.data.length).toEqual(1);
        expect(stuff.data[0]).toEqual('a');
    });

    let test = new List('a', 'b', 'c');

    it('shifts out one item from the start of the data set', () => {
        let stuff = new List('a', 'b', 'c');
        stuff.shift();
        expect(stuff.data.length).toEqual(2);
        expect(stuff.data[0]).toEqual('b');
    });

    it('shift items right from the start of the data set and inserts parameters', () => {
        let stuff = new List('a', 'b', 'c');
        stuff.unshift(1, 2, 3);
        expect(stuff.data.length).toEqual(6);
        expect(stuff.data[0]).toEqual(1);
    });

    it('ForEach iterates thru array and able to do function on elements', () => {
        let stuff = new List('a', 'b', 'c');
        let tempArr1 = [];
        let tempArr2 = [];
        stuff.ForEach(el => {tempArr1.push(el)});
        stuff.ForEach((el,index) => {tempArr2.push(index)});
        expect(tempArr1[0]).toEqual(stuff.data[0]);
        expect(tempArr2[0]).toEqual(0);
    });

 it('Map iterates thru array and able to do function on elements', () => {
        let stuff = new List('a', 'b', 'c');
        let tempArr1 = [];
        let tempArr2 = [];
        stuff.map(el => {tempArr1.push(el)});
        stuff.map((el,index) => {tempArr2.push(index)});
        expect(tempArr1[0]).toEqual(stuff.data[0]);
        expect(tempArr2[0]).toEqual(0);
    });

    it('Filter iterates thru array elements and filters elements  based on test returning new array', () => {
        let stuff = new List('a', 'b', 'c');
        let tempArr1 = stuff.myFilter(el => {return el == 'c'});
        expect(tempArr1[0]).toEqual(stuff.data[2]);
        stuff = new List(1, 2, 3);
        let tempArr2 = stuff.myFilter(el => {return el < 3});
        expect(tempArr2[2]).toEqual(undefined);
    });

    it('Folds array elements into single value', () => {
        let stuff = new List(1, 2, 3);
        let temp1 = stuff.myReduce((accumulator, el )=> {return accumulator + el});
        expect(temp1).toEqual(7);
        let temp2  = stuff.myReduce((accumulator, el )=> {return accumulator * el});
        expect(temp2).toEqual(6);
    });
});