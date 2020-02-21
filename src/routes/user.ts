import express from 'express'
import { UserTestFunction } from '../controllers/user/test'
import { MakeNewAccount } from '../controllers/user/makeNewAccount'
import { Login } from '../controllers/user/login'

const router = express.Router()

router.get('/test', UserTestFunction)
router.post('/new-account', MakeNewAccount)
router.post('/login', Login)

export default router