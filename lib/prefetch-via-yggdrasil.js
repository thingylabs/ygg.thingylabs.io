function prefetchViaYggdrasil () {
  if (window.location.hostname.includes('ygg-only')) {
    return
  }
  const url = window.location.pathname || '/index.html'
  const file = url.substring(url.lastIndexOf('/') + 1)
  const href = 'https://ygg-only.thingylabs.io/' + file
  prefetch(href)

  if (file === 'uplink.html') {
    prefetch('https://yyy.thingylabs.io/')
  }

  function prefetch (href) {
    const link = document.createElement('link')
    link.rel = 'prefetch'
    link.href =  href
    document.body.appendChild(link)
  }
}
prefetchViaYggdrasil()
