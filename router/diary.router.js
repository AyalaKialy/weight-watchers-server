const express = require('express');
const router = express.Router();
const controller = require('../controller/diary.controller')

router.get('/:userId', controller.getDiaryUser);
router.post('/:userId', controller.addNewDaySummary);
router.put('/:id', controller.updateDaySummary);
router.delete('/:id', controller.deleteDaySummary)

module.exports = router;