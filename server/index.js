const express = require('express')
const client = require('../node-postgres')
const videoPlaylist = require('../src/data')
const queries = require('../database-queries') 

const app = express()
const port = 4000
 
app.get('/videos', function (req, res) {
  res.send(videoPlaylist)
})

app.get('/api', (req, resp) => {
  client.query(queries.queryString8, (err, res) => {
    if (err) throw err
    resp.send(res.rows)
    client.end()

  })  
})

// app.get('/api', (req, resp) => {
//   client.query(queries.queryString14(vid.videoId), (err, res) => {
//     if (err) throw err
//     resp.send(res.rows)
//     client.end()
//   })  
// })

// app.get('/api/getLikes' (req, resp) => {
//   client.query(queries.queryString14(vid.videoId), (err, res) => {
//     if (err) throw err
//     resp.send(res.rows)
//     client.end()
//   })  
// }, 

app.listen(port, () => {
    console.log('the app is running on port 4000:', port)
    4000
})