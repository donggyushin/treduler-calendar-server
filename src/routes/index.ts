import express from 'express'
import user from './user'
import calendar from './calendar'

const router = express.Router()

router.use('/user', user)
router.use('/calendar', calendar)

export default router