import app from './app'
import './database/mongoose'

const PORT = 4004

app.listen(PORT, () => console.log(`Treduler app server listening on port ${PORT}!`))