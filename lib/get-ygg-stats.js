const updateInterval = 2000
const peerCountElement = document.querySelector('.react-terminal-wrapper')

async function getYggStats() {
  const connections = await (await fetch('/get-connections')).text()
  const peers = await (await fetch('/get-peers')).text()

  const stats = connections + ' connections / ' + peers + ' peers'
  peerCountElement.setAttribute('data-terminal-name', stats)
}

setInterval(getYggStats, updateInterval)
