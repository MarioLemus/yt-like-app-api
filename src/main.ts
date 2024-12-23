import express from 'express'
import logger from 'morgan'

// plan overview
//
// save upload videos
// priority ->  send videos back
const app = express()
const port = 4000;

app.use(logger('dev'))

app.get('/default', (req, res) => {
  res.sendFile('../public/test-2k-video-2.mp4')
})

app.get('/processed', (req, res) => {

})


app.listen(port, () => {
  console.log('server running on port: ' + port)
})
