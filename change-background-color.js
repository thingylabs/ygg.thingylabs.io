const iframes = document.getElementsByTagName('iframe')
for (const iframe of iframes) {
  const styleElem = document.createElement('style')
  styleElem.textContent = `
    #terminal, .xterm-viewport, .react-terminal-wrapper {
      background-color: rgb(37, 42, 51) !important;
    }
  `
  iframe.contentDocument.head.appendChild(styleElem)
  iframe.style = 'display: block;'
}