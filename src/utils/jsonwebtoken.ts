import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const createToken = (id: string): string => {
    return jwt.sign({ id }, process.env.JSONWEBTOKEN_SECRETKET || '')
}

export const exportId = (token: string): string => {
    interface Idecoded {
        id: string
    }
    const decoded = jwt.verify(token, process.env.JSONWEBTOKEN_SECRETKET || '') as Idecoded
    return decoded.id
}