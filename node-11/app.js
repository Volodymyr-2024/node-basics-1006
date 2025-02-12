import express from 'express'
import 'dotenv/config'
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3333

app.get('/', (req, res) => {
    res.send('Hello, sequelize with Express')
})

app.listen(PORT, async() => {
    try {
        await sequelize.authenticate()
        console.log(`Connection to the database has been established successfully`)
        console.log(`Server is running on http://localhost:${PORT}`)
    } catch(error) {
        console.error('Unable to connect to the database: ', error)
    }
})