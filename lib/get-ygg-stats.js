const updateInterval = 2000
const peerCountElement = document.querySelector('.react-terminal-wrapper')

async function getYggStats() {
  const [connections, peers] = await Promise.all([
    fetch('/get-connections').then(response => response.text()),
    fetch('/get-peers').then(response => response.text())
  ])

  const stats = connections + ' connections / ' + peers + ' peers'
  peerCountElement.setAttribute('data-terminal-name', stats)
}

setInterval(getYggStats, updateInterval)
