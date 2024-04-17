async function reloadOnDisconnect () {
  while (true) {
    const interval = setInterval(function () {
      const error = document.querySelector('.xterm-overlay').length
      if (error) {
        window.location.reload()
      }
    }, 3 * 1000)
    await new Promise(done => {
      document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'visible') {
          done()
        } else {
          clearInterval(interval)
        }
      })
    })
  }
}
reloadOnDisconnect()
