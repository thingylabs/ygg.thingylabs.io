async function reloadOnDisconnect () {
  while (true) {
    const interval = setInterval(function () {
      const error = Array.from(document.querySelectorAll('iframe')).some(iframe => {
        return iframe.contentWindow.document.body.querySelector('.xterm-overlay')
      })
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
