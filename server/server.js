/* eslint-env node */
/* global process */
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import contactRouter from './routes/contact.js'
import net from 'net'
import http from 'http'

dotenv.config()

// Log configuration status (do not print secrets)
const cfgStatus = {
  GMAIL_USER: Boolean(process.env.GMAIL_USER),
  GMAIL_APP_PASSWORD: Boolean(process.env.GMAIL_APP_PASSWORD),
  CONTACT_TO_EMAIL: Boolean(process.env.CONTACT_TO_EMAIL),
  PORT: Boolean(process.env.PORT),
  FRONTEND_ORIGIN: Boolean(process.env.FRONTEND_ORIGIN)
}
console.log(`GMAIL_USER configured: ${cfgStatus.GMAIL_USER}`)
console.log(`GMAIL_APP_PASSWORD configured: ${cfgStatus.GMAIL_APP_PASSWORD}`)
console.log(`CONTACT_TO_EMAIL configured: ${cfgStatus.CONTACT_TO_EMAIL}`)

const app = express()
const PORT = process.env.PORT || 5000

const frontend = process.env.FRONTEND_ORIGIN || 'http://localhost:5173'

app.use(express.json())
app.use(cors({ origin: frontend }))

app.use('/api/contact', contactRouter)

// Helper: check if a TCP port is open on localhost
function isPortOpen(port, host = '127.0.0.1', timeout = 500) {
  return new Promise((resolve) => {
    const socket = new net.Socket()
    let called = false
    socket.setTimeout(timeout)
    socket.on('connect', () => {
      called = true
      socket.destroy()
      resolve(true)
    })
    socket.on('timeout', () => {
      if (!called) {
        called = true
        socket.destroy()
        resolve(false)
      }
    })
    socket.on('error', () => {
      if (!called) {
        called = true
        resolve(false)
      }
    })
    socket.connect(port, host)
  })
}

async function checkAndStart() {
  const portOpen = await isPortOpen(PORT)
  if (portOpen) {
    // Try an HTTP request to confirm a server is responding
    const options = { hostname: '127.0.0.1', port: PORT, path: '/api/contact', method: 'GET', timeout: 700 }
    const req = http.request(options, (res) => {
      console.log(`Port ${PORT} is already in use and a server responded (status ${res.statusCode}). Assuming backend is already running.`)
      process.exit(0)
    })
    req.on('error', () => {
      console.log(`Port ${PORT} is already in use by another process. Please stop that process and try again.`)
      process.exit(1)
    })
    req.on('timeout', () => {
      req.destroy()
      console.log(`Port ${PORT} appears open but no HTTP response received. Port is in use.`)
      process.exit(1)
    })
    req.end()
    return
  }

  const server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
  })

  server.on('error', (err) => {
    if (err && err.code === 'EADDRINUSE') {
      console.error(`Port ${PORT} is already in use. Do not start another server on the same port.`)
    } else {
      console.error('Server error:', err)
    }
    process.exit(1)
  })
}

checkAndStart()
