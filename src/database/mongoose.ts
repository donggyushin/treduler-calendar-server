import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
mongoose.connect(process.env.DB_END_POINT ? process.env.DB_END_POINT : '', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log('db connection!'))