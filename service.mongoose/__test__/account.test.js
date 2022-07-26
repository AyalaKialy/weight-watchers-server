const accountService = require('../account.service');
const userModel = require('../../models/user.model');

const { expect } = require('chai');
const sinon = require('sinon');

describe('test account functionality', () => {
    const user = {
        id: 1,
        firstName: 'Rachel',
        lastName: 'Keller',
        city: 'Jerusalem',
        street: 'Arimon',
        number: 1,
        phone: 'String',
        email: 'rk@example.com',
        height: 1.
    }
    test('test login', async () => {
        const meansOfIdentification = 'rk@example.com';
        sinon.stub(userModel, 'findOne').returns(user);
        const returnedUser = await accountService.login(meansOfIdentification);
        expect(returnedUser).equal(user);
    })
})