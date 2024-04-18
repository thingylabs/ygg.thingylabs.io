function prefetchViaYggdrasil () {
  if (window.location.hostname.includes('ygg-only')) {
    return
  }
  const url = window.location.pathname || '/index.html'
  const href = 'https://ygg-only.thingylabs.io/' + url.substring(url.lastIndexOf('/') + 1)
  prefetch(href)

  if (url === '/uplink.html') {
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
