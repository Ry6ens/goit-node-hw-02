const app = require('./app')

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running. Use our API on port: 3000")
})
