import app from './app'
import './database/mongoose'

const PORT = 4000

app.listen(PORT, () => console.log(`Treduler app listening on port ${PORT}!`))