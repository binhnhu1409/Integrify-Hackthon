import express from 'express'
// import lusca from 'lusca' will be used later
import dotenv from 'dotenv'
import cors from 'cors'

import userRouter from './routers/user'
import customerRouter from './routers/customer'
import timesheetRouter from './routers/timesheet'
import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'

dotenv.config({ path: '.env' })
const app = express()

// Express configuration
app.set('port', process.env.PORT || 3000)

// Global middleware
app.use(apiContentType)
app.use(express.json())
app.use(cors())

// Set up routers
app.use('/api/v1/users', userRouter)
app.use('/api/v1/customers', customerRouter)
app.use('/api/v1/timesheets', timesheetRouter)

// Custom API error handler
app.use(apiErrorHandler)

export default app
