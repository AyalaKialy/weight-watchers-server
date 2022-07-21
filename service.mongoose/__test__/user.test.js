
const userService = require('../user.service');
const userModel = require('../../models/user.model');

const { expect } = require('chai');
const sinon = require('sinon');

test('returns an user',async () => {
    const userObject={
        id:1,
        firstName: 'Rachel',
        lastName: 'Keller',
        city:'Jerusalem',
        street:'Arimon',
        number:1,
        phone:'String',
        email: 'rk@example.com',
        height:1.
    }
    const id=1;
    sinon.stub(userModel, 'findOne').returns(userObject);
    const returnedUser = await userService.getUserById(id);
    expect(returnedUser).equal(userObject);
}),

test('returns an user',async () => {
    const usersObject=[{
        id:1,
        firstName: 'Rachel',
        lastName: 'Keller',
        city:'Jerusalem',
        street:'Arimon',
        number:1,
        phone:'String',
        email: 'rk@example.com',
        height:1.
    },
    {   
        id:2,
        firstName: 'Rachel',
        lastName: 'Keller',
        city:'Jerusalem',
        street:'Arimon',
        number:1,
        phone:'String',
        email: 'kk@example.com',
        height:1.
    }]
    sinon.stub(userModel, 'find').returns(usersObject);
    const returnedUsers = await userService.getAllUsers();
    expect(typeof returnedUsers).equal(typeof Array());
});