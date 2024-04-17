function changeBackgroundColor (iframe) {
  const iframes = [iframe] || document.getElementsByTagName('iframe')
  for (const iframe of iframes) {
    findContent(iframe).then(_ => {
      appendStyle(iframe)
    })
  }

  function findContent (iframe) {
    return new Promise(done => {
      search(iframe, done)
    })

    function search (iframe, done, isRetry) {
      setTimeout(_ => {
        if (!iframe.contentDocument || !iframe.contentDocument.body.querySelector('#terminal')) {
          search(iframe, done, true)
          return
        }
        done()
      }, isRetry ? 50 : 1)
    }
  }

  function appendStyle (iframe) {
    const styleElem = document.createElement('style')
    styleElem.textContent = `
      html, .terminal, #terminal, .xterm-viewport, .react-terminal-wrapper {
        background-color: rgb(37, 42, 51) !important;
      }
    `
    if (!iframe.contentDocument) {
      return console.log(iframe.contentDocument)
    }
    iframe.contentDocument.head.appendChild(styleElem)
    iframe.style = 'display: block;'
  }
}
changeBackgroundColor()
