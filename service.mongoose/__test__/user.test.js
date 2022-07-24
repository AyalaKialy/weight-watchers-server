 
const userService = require('../user.service');
const accountService = require('../account.service');
const userModel = require('../../models/user.model');

const { expect } = require('chai');
const sinon = require('sinon');

describe('test users functionality', () => { 
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
    test('return user by id',async () => {
        const id=1;
        sinon.stub(userModel, 'findOne').returns(usersObject);
        const returnedUser = await userService.getUserById(id);
        expect(returnedUser).equal(usersObject);
    }),

    test('return type of users',async () => {
        sinon.stub(userModel, 'find').returns(usersObject);
        const returnedUsers = await userService.getAllUsers();
        expect(typeof returnedUsers).equal(typeof Array());
    });
});