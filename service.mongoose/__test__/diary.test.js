const diaryService = require('../diary.service');
const diaryModel = require('../../models/diary.model');
const { expect } = require('chai');
const sinon = require('sinon');
const mongoose = require("mongoose");
const { ObjectId } = require('mongodb');

describe('test diary functionality', () => {
    const diary = {
        id: '1',
        userID:'2',
        date: '05/22/2222',
        breakfast: [
            'SSSSS',
            'yogurt',
            'coffee'
        ],
        lunch: [
            'beans',
            'meat',
            'rice'
        ],
        dinner: [
            'vegetables',
            'omelet'
        ],
        snackingBetweenMeals: [
            'cookies',
            'candies'
        ]
    }
    const id = ObjectId(2);
    test('return diary user', async () => {
        sinon.stub(diaryModel, 'findOne').returns(diary);
        const returnedDiary = await diaryService.getDiaryUser(id)
        expect(returnedDiary).equal(diary);
    })
});