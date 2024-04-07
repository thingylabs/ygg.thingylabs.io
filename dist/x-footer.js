 // Lego version 2.0.0-beta.8
  import { h, Component } from './lego.min.js'
  

  

  const __template = function({ state }) {
    return [  
    h("div", {"id": `footer`}, [
      h("ul", {}, [
        h("li", {},           h("a", {"href": `https://www.thingylabs.io/impressum.html`}, `Impressum`)),
        h("li", {},           h("a", {"href": `https://github.com/thingylabs/ygg.thingylabs.io/`}, `Github`)),
        h("li", {},           h("a", {"href": `services.html#show-tos`}, `Terms of Service`)),
        h("li", {},           h("a", {"href": `https://yggdrasil-network.github.io/about.html`}, `About Yggdrasil Network`))
      ])
    ])
  ]
  }

  const __style = function({ state }) {
    return h('style', {}, `
      
      
      #footer {
        width: 100%;
        padding: 0 12px;
        font-size: smaller;
        color: grey;
        margin-top: 2px;
      }
      #footer ul {
        text-align: right;
        margin: 0;
      }
      #footer li {
        margin-left: 30px;
        float: right;
        display: list-item;
      }
      #footer a {
        color: grey;
      }
    
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

  
