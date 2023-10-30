const express = require('express')
const { readdirSync } = require('fs') //ฟั่งชั่นเข้าไปอ่านใช้ไฟล์ทั้งหมด
const morgan = require('morgan') //โมแกน แสดงว่าเรียกใช้อะไร
const cors = require('cors')
const bodyParse = require('body-parser')
const connectDB = require('./Config/DB')


const app = express();
connectDB()



app.use(morgan('dev'))
app.use(cors())
app.use(bodyParse.json({ limit: '10mb' }))



readdirSync('./Route').
    map((r) => app.use('/api', require('./Route/' + r)))



app.listen(5000, () => console.log('Sever Runing on port 5000'))
// จบบท 1