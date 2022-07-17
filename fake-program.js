/*
  This is a placeholder program. It keeps the Docker container runnings
  so that the developer can enter it and debug issues.
*/

function start() {
  setInterval(function() {
    const now = new Date()
    console.log(`Timestamp ${now.toLocaleString()}`)
  }, 60000)
}
start()
