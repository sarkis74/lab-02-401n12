'use strict';

class List {

    constructor(...data) {
        // this.length = 0;
        this.data = data;
        this.length = 0;
        for(var i of data) {
            this.length++;
        }
        return this.length;
    }

    /**
     * Add item to the end of the list
     * @param item
     */
    push(item) {
        this.data[this.length] = item;
        this.length++;
    };

    /**
     * // Remove an item from the end of the list and return it's value
     * @returns {*}
     */
    pop() {
        this.data[this.length + 1] = null;
        let temp = this.data.filter(el => {return el != null});
        return this.data = temp;
    };


    shift() {
        this.data[0] = null;
        let temp = this.data.filter(el => {return el != null});
        return this.data = temp;
    };

    unshift(...item) {
        let temp = item.concat(this.data);
        return this.data = temp;
    };

    forEach(callback) {
        this.callback = callback;
        let param1;
        let param2;
        for(var i = 0; i < this.data.length; i++) {
            //Add function to each array element
            param1 = this.data[i];
            param2 = i;
            callback(param1, param2)
        }
    };

    map(callback) {
        this.callback = callback;
        let param1;
        let param2;
        for(var i = 0; i < this.data.length; i++) {
            //Do something(function) to each array element
            param1 = this.data[i];
            param2 = i;
            callback(param1, param2)
        }
    };

    // /**
//  * // Filter items that meet test
//  * @returns {*}
//  */
    filter(callback) {
        this.callback = callback;
        let tempArr = [];
        for(var i = 0; i < this.data.length; i++) {
            //Do something(function) to each array element
            //Each element must pass implemented test
            if(callback(this.data[i])) {
                tempArr.push(this.data[i])
            }
        }
        return tempArr;
    };

    // /**
//  * // Reduce items to single value
//  * @returns {*}
//  */
    reduce(callback, current) {
        let accumulator = current !== undefined ? current : this.data[0]; //--> Accumulator is by default 1
        for(let i = 0; i < this.length; i++) {
            accumulator = callback(accumulator, this.data[i]);
        }
        return accumulator;
    };

}

module.exports = List;