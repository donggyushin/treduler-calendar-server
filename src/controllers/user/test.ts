import { Request, Response } from "express"

export const UserTestFunction = (req: Request, res: Response) => {
    return res.json({
        ok: true
    })
}