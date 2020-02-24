import { Request, Response, NextFunction } from 'express'
import { exportId } from '../utils/jsonwebtoken'
import UserModel, { IUser } from '../database/user'

interface RequestHasUser extends Request {
    user?: IUser
}

export const verifyUser = async (req: RequestHasUser, res: Response, next: NextFunction) => {
    interface Iheaders {
        jwt?: string
    }
    const { jwt } = req.headers as Iheaders
    if (jwt) {
        const id = exportId(jwt)
        try {
            const user = await UserModel.findById(id)
            if (user) {
                req.user = user
                next();
            } else {
                res.status(401)
                return res.json({
                    message: 'Invalid token'
                })
            }
        } catch (err) {
            res.status(500)
            return res.json({
                message: 'Error occured while finding user'
            })
        }

    } else {
        res.status(401)
        return res.json({
            message: 'You need to submit your token'
        })
    }
}