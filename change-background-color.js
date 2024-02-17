const iframes = document.getElementsByTagName('iframe')
for (const iframe of iframes) {
  findContent().then(_ => {
    appendStyle(iframe)
  })
}

function findContent () {
  return new Promise(done => {
    search(done)
  })

  function search (done, isRetry) {
    setTimeout(_ => {
      if (!iframes[0].contentDocument || !iframes[0].contentDocument.body.querySelector('#terminal')) {
        search(done, true)
        return
      }
      done()
    }, isRetry ? 50 : 1)
  }
}

function appendStyle (iframe) {
  const styleElem = document.createElement('style')
  styleElem.textContent = `
    #terminal, .xterm-viewport, .react-terminal-wrapper {
      background-color: rgb(37, 42, 51) !important;
    }
  `
  iframe.contentDocument.head.appendChild(styleElem)
  iframe.style = 'display: block;'
}
