import { Request, Response } from 'express'
import UserModel, { UserFrame } from '../../database/user'
import { createToken } from '../../utils/jsonwebtoken'

export const MakeNewAccount = async (req: Request, res: Response) => {
    interface IreqBody {
        email: string
        name: string
        phone: string
        password: string
    }
    const { email, name, phone, password } = req.body as IreqBody
    const userObject: UserFrame = {
        email,
        name,
        phone,
        password,
        profile: "",
        calendars: []
    }
    const newUser = new UserModel(userObject)
    try {
        await newUser.save()
        const jwt = await createToken(newUser.id)

        // generate jwt token
        // return information of new user with token 
        return res.json({
            name,
            phone,
            email,
            profile: "",
            jwt
        })

    } catch (err) {
        res.status(500)
        return res.json({
            error: 'Error occured while creating new user'
        })
    }
}