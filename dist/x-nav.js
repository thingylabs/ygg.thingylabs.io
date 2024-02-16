 // Lego version 2.0.0-beta.8
  import { h, Component } from './lego.min.js'
  

  
  if (document.location.host.includes('-only')) {
    document.getElementById('ygg-switch').href = 'https://ygg.thingylabs.io/'
    document.getElementById('ygg-switch').innerHTML = '🔌'
  }


  const __template = function({ state }) {
    return [  
    h("div", {"class": `d-flex flex-row-reverse p-2`}, [
      h("a", {"href": `https://ygg-only.thingylabs.io/`, "id": `ygg-switch`, "class": `btn btn-light`}, `⚡`),
      h("a", {"href": `https://publicpeers.neilalexander.dev/`, "class": `btn btn-light`}, `Public Peers`),
      h("a", {"href": `speedtest.html`, "class": `btn btn-light`}, `Speedtest`),
      h("a", {"href": `uplink.html`, "class": `btn btn-light`}, `Uplink`),
      h("a", {"href": `index.html`, "class": `btn btn-light`}, `Home`)
    ])
  ]
  }

  const __style = function({ state }) {
    return h('style', {}, `
      
      
    `)
  }

  // -- Lego Core
  export default class Lego extends Component {
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

  
