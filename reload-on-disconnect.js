async function reloadOnDisconnect () {
  while (true) {
    const interval = setInterval(function () {
      const faultyIframe = Array.from(document.querySelectorAll('iframe')).find(iframe => {
        return iframe.contentWindow.document.body.querySelector('.xterm-overlay')
      })
      if (faultyIframe) {
        faultyIframe.contentWindow.location.reload()
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
