document.addEventListener('load', function () {
  const iframes = document.getElementsByTagName("iframe")
  for (const iframe of iframes) {
    iframe.addEventListener('load', function (event) {
      const styleElem = document.createElement('style')
      styleElem.textContent = `.xterm-viewport {
        background-color: rgb(37, 42, 51) !important;
      }`
      event.target.contentDocument.head.appendChild(styleElem)
    })
  }
})