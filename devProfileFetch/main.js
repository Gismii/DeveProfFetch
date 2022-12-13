import './style.css'

import { buscaPerfil } from './gtihubb'

document.querySelector('#app').innerHTML = `
  <div>
    
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="https://avatars.githubusercontent.com/u/97984496?v=4" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Perfil Github!</h1>
    
    
 <div id="eu">

    <p id="n"></p>
    <p id="l"></p>
    <a  class="re" hrf="https://github.com/Gismii?tab=repositories">REPOSITORIO PUBLICO:<p id="r"></p></a>
    <p id="s"></p>
    <p id="c"></p>
    <p id="a"></p>

  </div>

  </div>
`



buscaPerfil()
