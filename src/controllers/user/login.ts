import { Response, Request } from 'express'
import UserModel from '../../database/user'
import { createToken } from '../../utils/jsonwebtoken'

export const Login = async (req: Request, res: Response) => {

    interface IreqBody {
        email: string
        password: string
    }
    const { email, password } = req.body as IreqBody

    try {

        const user = await UserModel.findOne({
            email,
            password
        })

        if (user) {
            const jwt = await createToken(user.id)

            return res.json({
                email: user.email,
                profile: user.profile,
                name: user.name,
                phone: user.phone,
                jwt
            })

        } else {
            res.status(500)
            return res.json({
                error: "can't find user"
            })
        }

    } catch (err) {
        res.status(500)
        return res.json({
            error: err.message
        })
    }

}