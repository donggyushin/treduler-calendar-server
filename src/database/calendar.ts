import { Document, Schema, model } from 'mongoose'

interface scheduleFrame {
    text: string
    color: string
}

interface ISchedule extends Document {
    text: string
    color: string
}

const ScheduleSchema = new Schema({
    text: String,
    color: String
})

export interface CalendarFrame {
    dayName: string
    date: Date
    schedules: scheduleFrame[]
}

export interface ICalendar extends Document {
    dayName: string
    date: Date
    schedules: ISchedule[]
}


export const calendarSchema = new Schema({
    dayName: String,
    date: Date,
    schedules: [ScheduleSchema]
})

const CalendarModel = model<ICalendar>('Calendar', calendarSchema)

export default CalendarModel