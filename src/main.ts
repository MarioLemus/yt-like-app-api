import express from 'express'
import logger from 'morgan'
import path from 'path'
import fs from 'fs/promises'
import { Readable } from 'stream'

// convert the video into a serialized buffer object
// 
// enviar el buffer en una respuesta api al front


// plan overview
//
// save upload videos
// priority ->  send videos
const app = express()
const port = 4000;

app.use(logger('dev'))

app.get('/default', async (req, res) => {
  const videoFilePath = path.join(__dirname, '../public/test-2k-video-2.mp4')
  const videoBuffer = await fs.readFile(videoFilePath)
  const fileMetadata = await fs.stat(videoFilePath)
  /*
    res.status(201).json({
      name: path.basename(videoFilePath.split('.')[0]),
      extension: path.extname(videoFilePath),
      videoBuffer
    })
    */
})

app.get('/processed', (req, res) => {

})


app.listen(port, () => {
  console.log('server running on port: ' + port)
})
