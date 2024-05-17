const updateInterval = 1000
const peerCountElement = document.querySelector('.react-terminal-wrapper')

async function fetchPeerCount() {
  const response = await fetch('/ygg-connected-peers')
  if (response.ok) {
    const peerCount = (await response.text()) + ' connections to peers'
    peerCountElement.setAttribute('data-terminal-name', peerCount)
  }
}

setInterval(fetchPeerCount, updateInterval)
