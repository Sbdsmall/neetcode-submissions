class DynamicArray {

    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.useDArray = new Array(capacity)
    }

    /**
     * @param {number} i
     * @returns {number}
     * 0 < i < arrayLength
     */
    get(i) {
        return this.useDArray[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     * 0 < i < arrayLength
     */
    set(i, n) {
        this.useDArray[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if (this.getSize() == this.getCapacity()) {
            this.resize();
        }
        this.useDArray[this.getSize()] = n;
    }

    /**
     * @returns {number}
     */
    popback() {
       const value = this.useDArray[this.getSize() - 1]
       this.useDArray[this.getSize() - 1] = undefined;
       return value;
    }

    /**
     * @returns {void}
     */
    resize() {
        let tempArray = new Array(this.useDArray.length * 2);

        for(let i = 0; i < this.useDArray.length; i++) {
            tempArray[i] = this.useDArray[i];
        }
        this.useDArray = tempArray;

    }

    /**
     * @returns {number}
     */
    getSize() {
        let counter = 0;

        this.useDArray.forEach(val => {
            if (val !== undefined) {
                counter++;
            }
        })
        return counter;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.useDArray.length;
    }
}
