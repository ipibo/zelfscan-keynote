const express = require("express")
const WebSocket = require("ws")
const path = require("path")

const app = express()

// Initialize WebSocket server
const wss = new WebSocket.Server({ port: 8080 })

// WebSocket event handling
wss.on("connection", (ws) => {
  console.log("A new client connected.")
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      console.log('sending to other')
      client.send(`${counter}`)
    }
  })

  // Event listener for incoming messages
  ws.on("message", (message) => {
    console.log("Received message:", message.toString())

    // Broadcast the message to all connected clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message.toString())
      }
    })
  })

  // Event listener for client disconnection
  ws.on("close", () => {
    console.log("A client disconnected.")
  })
})

// Start the server
const port = 3000

app.listen(port, () => {
  console.log(`Server star  ted on http://localhost:${port}`)
})
// app.use(express.static(path.join(__dirname, "public")))
app.use(express.static("public"))

let counter = 1
let maxCounter = 1

setInterval(() => {
  console.log("sending pulse")

  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(`${counter}`)
    }
  })

  counter++
  if (counter > maxCounter) {
    counter = 1
  }
}, 90000)
