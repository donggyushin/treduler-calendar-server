import { Request, Response } from 'express'
import CalendarModel, { ICalendar } from '../../database/calendar'
import { IUser } from '../../database/user'
import { getDayNameFromString } from '../../utils/getDayName'

interface RequestHasUser extends Request {
    user?: IUser
}

export const getCalendars = async (req: RequestHasUser, res: Response) => {
    interface Iparams {
        from?: string
        to?: string
    }
    const { from, to } = req.params as Iparams
    const calendars: ICalendar[] = []
    if (from && to) {
        const fromDateObject = new Date(parseInt(from))
        const toDateObject = new Date(parseInt(to))


        for (let i = fromDateObject.getTime(); i <= toDateObject.getTime(); i = fromDateObject.setDate(fromDateObject.getDate() + 1)) {

            const dateobj = new Date(i)
            try {
                if (req.user) {

                    const calendar = await CalendarModel.findOne({
                        userId: req.user.id,
                        date: dateobj,
                    })

                    if (calendar) {
                        calendars.push(calendar)
                    } else {
                        const newCalendar = new CalendarModel({
                            userId: req.user.id,
                            date: dateobj,
                        })
                        await newCalendar.save()
                        calendars.push(newCalendar)
                    }
                } else {
                    res.status(401)
                    return res.json({
                        message: 'Invalid token'
                    })
                }


            } catch (err) {
                res.status(500)
                return res.json({
                    message: 'Error occured while finding or creating calendar'
                })
            }

        }

        return res.json({
            calendars
        })
    } else {
        res.status(304)
        return res.json({
            message: "'from' and 'to' params required"
        })
    }
}