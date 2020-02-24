import express from 'express'
import { getCalendars } from '../controllers/calendar/getCalendars'
import { verifyUser } from '../middlewares/verifyUser'

const router = express.Router()

router.get('/:from/:to', verifyUser, getCalendars)

export default router