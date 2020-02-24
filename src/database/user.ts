import { Document, Schema, model } from 'mongoose'
import { calendarSchema, ICalendar, CalendarFrame } from './calendar'

export interface UserFrame {
    email: string
    name: string
    password: string
    profile: string
    phone: string
    calendars: CalendarFrame[]
}

export interface IUser extends Document {
    email: string
    name: string
    password: string
    profile: string
    phone: string
    calendars: ICalendar[]
}

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    profile: String,
    phone: String,
    calendars: [calendarSchema]
})

const UserModel = model<IUser>('User', userSchema);

export default UserModel