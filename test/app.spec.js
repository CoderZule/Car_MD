const { expect } = require('chai');
const { add } = require('../app');

describe('unit test for the add function', () => {
    it('should add 3 numbers together', () => {
        const result = add(2, 2);
        expect(result).to.be.eq(4);
    });
})
