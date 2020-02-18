import express from 'express'
import { UserTestFunction } from '../controllers/user/test'
const router = express.Router()

router.get('/test', UserTestFunction)

export default router