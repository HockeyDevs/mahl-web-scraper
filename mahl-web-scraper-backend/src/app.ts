import path from 'path'

import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import helmet from 'helmet'

import indexRouter from './routes/index'

const app = express()

app.use(helmet())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)

export default app