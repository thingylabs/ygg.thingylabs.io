async function reloadOnDisconnect () {
  while (true) {
    const interval = setInterval(function () {
      const faultyIframe = Array.from(document.querySelectorAll('iframe')).find(iframe => {
        return iframe.contentWindow.document.body.querySelector('.xterm-overlay')
      })
      if (faultyIframe) {
        faultyIframe.addEventListener('load', function() {
          changeBackgroundColor(faultyIframe)
        })
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
window.addEventListener('load', _ => {
  // So we do not react to the initial info overlay
  setTimeout(_ => {
    reloadOnDisconnect()
  }, 1000 * 10)
})
