const updateInterval = 1000
const peerCountElement = document.querySelector('.react-terminal-wrapper')

async function fetchPeerCount() {
  const response = await fetch('/ygg-connected-peers')
  if (response.ok) {
    const peerCount = await response.text()
    peerCountElement.setAttribute('data-terminal-name', peerCount)
  }
}

fetchPeerCount()
setInterval(fetchPeerCount, updateInterval)
