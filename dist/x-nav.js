 // Lego version 2.0.0-beta.8
  import { h, Component } from './lego.min.js'
  

  

  const __template = function({ state }) {
    return [  
    h("div", {"class": `d-flex flex-row-reverse p-2`}, [
      h("a", {"href": `https://${!isYgg ? 'ygg-only' : 'ygg'}.thingylabs.io/`, "id": `ygg-switch`, "class": `btn btn-light`}, `${
      !isYgg ? '⚡' : '🔌'
    }`),
      h("a", {"href": `peers.html`, "class": `btn btn-light ${isActive('peers')}`}, `Peers`),
      h("a", {"href": `map.html`, "class": `btn btn-light ${isActive('map')}`}, `Map`),
      h("a", {"href": `speedtest.html`, "class": `btn btn-light ${isActive('speedtest')}`}, `Speedtest`),
      h("a", {"href": `services.html`, "class": `btn btn-light ${isActive('services')}`}, `Services`),
      h("a", {"href": `uplink.html`, "class": `btn btn-light ${isActive('uplink')}`}, `Uplink`),
      h("a", {"href": `index.html`, "class": `btn btn-light ${isActive('index')}`}, `Home`)
    ])
  ]
  }

  const __style = function({ state }) {
    return h('style', {}, `
      
      
      @import url(bootstrap.purged.css);
      @import url(style.css);
      .bold {
        font-weight: bold;
      }
    
    `)
  }

  // -- Lego Core
  class Lego extends Component {
    init() {
      this.useShadowDOM = false
      if(typeof state === 'object') this.__state = Object.assign({}, state, this.__state)
      if(typeof methods === 'object') Object.keys(methods).forEach(methodName => this[methodName] = methods[methodName])
      if(typeof connected === 'function') this.connected = connected
      if(typeof setup === 'function') setup.bind(this)()
    }
    get vdom() { return __template }
    get vstyle() { return __style }
  }
  // -- End Lego Core

  
  let isYgg
  export default class extends Lego {
    init() {
      isYgg = document.location.host && document.location.host.includes('-only')
    }
  }

  // Highlight active menu item
  const path = document.location.pathname
  let active = path.substring(
    path.indexOf('/') + 1,
    path.lastIndexOf('.')
  )
  if (active === '/') {
    active = 'index'
  }
  function isActive (name) {
    if (active === name) {
      return 'bold'
    }
  }

