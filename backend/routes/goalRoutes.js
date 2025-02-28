const express = require('express')
const router = express.Router()

const {
 getGoals,
 addGoal,
 updateGoal,
 deleteGoal,
 getGoalById
} = require('../controllers/goalController')

router.get('/', getGoals)
router.post('/', addGoal)
router.put('/:id', updateGoal)
router.delete('/:id', deleteGoal)
router.get('/:id', getGoalById)
module.exports = router

