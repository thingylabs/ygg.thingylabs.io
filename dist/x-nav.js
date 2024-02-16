 // Lego version 2.0.0-beta.8
  import { h, Component } from './lego.min.js'
  

  

  const __template = function({ state }) {
    return [  
    h("div", {"class": `d-flex flex-row-reverse p-2`}, [
      h("a", {"href": `https://${!isYgg ? 'ygg-only' : 'ygg'}.thingylabs.io/`, "id": `ygg-switch`, "class": `btn btn-light`}, `${
      !isYgg ? '⚡' : '🔌'
    }`),
      h("a", {"href": `https://publicpeers.neilalexander.dev/`, "class": `btn btn-light`}, `Public Peers`),
      h("a", {"href": `uplink.html`, "class": `btn btn-light`}, `Uplink`),
      h("a", {"href": `index.html`, "class": `btn btn-light`}, `Home`)
    ])
  ]
  }

  const __style = function({ state }) {
    return h('style', {}, `
      
      
      @import url(bootstrap.purged.css);
      @import url(style.css);
    
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

