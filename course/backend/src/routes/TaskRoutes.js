const express = require('express');
const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');

const router = express.Router();

router.post('/', TaskValidation, TaskController.create)
router.put('/:id', TaskController.update)
router.put('/:id/:done', TaskController.done)
router.delete('/:id', TaskController.destroy)

router.get('/:id', TaskController.show)
router.get('/filter/all/:macaddress', TaskController.all)
router.get('/filter/late/:macaddress', TaskController.late)
router.get('/filter/today/:macaddress', TaskController.today)
router.get('/filter/week/:macaddress', TaskController.week)
router.get('/filter/month/:macaddress', TaskController.month)
router.get('/filter/year/:macaddress', TaskController.year)

module.exports = router