import { Document, Schema, model } from 'mongoose'

interface scheduleFrame {
    text: string
    color: string
    calendarId: string
}

interface ISchedule extends Document {
    text: string
    color: string
    calendarId: string
}

const ScheduleSchema = new Schema({
    text: String,
    color: String,
    calendarId: String
})

export interface CalendarFrame {
    userId: string
    date: Date
    schedules: scheduleFrame[]
}

export interface ICalendar extends Document {
    userId: string
    date: Date
    schedules: ISchedule[]
}


export const calendarSchema = new Schema({
    userId: String,
    date: Date,
    schedules: [ScheduleSchema],
})

const CalendarModel = model<ICalendar>('Calendar', calendarSchema)

export default CalendarModel