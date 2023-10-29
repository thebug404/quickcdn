import express from 'express'

import { environment } from './environments'

const app = express()

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World'
  })
})

app.listen(environment.PORT, () => {
  console.log('Server listening on port 3000')
})
