import React from 'react'

export default props => (
  <svg
    viewBox='0 0 32 32'
    {...props}
  >
    <g
      fill='none'
      fillRule='evenodd'
    >
      <circle
        cx='16'
        cy='16'
        r='16'
        fill='#252525'
      />
      <path
        fill='#fff'
        fillRule='nonzero'
        d='M25.628 21.209a.38.38 0 0 1 .372.384V23.5h-6.279l-.024-1.66c.001-.11.05-.215.133-.284a.564.564 0 0 1 .084-.087c2.767-1.93 3.83-5.605 2.542-8.784-1.289-3.179-4.572-4.978-7.847-4.3-3.274.677-5.631 3.644-5.632 7.09-.002 2.355 1.12 4.56 3.001 5.895.041.023.074.057.096.099a.397.397 0 0 1 .229.359l-.024 1.66H6V21.58c0-.212.167-.384.372-.384s.372.172.372.384v1.152h4.802l.012-.718h-.012c-2.761-2.002-3.946-5.618-2.93-8.938C9.635 9.756 12.62 7.5 15.995 7.5s6.36 2.256 7.377 5.576c1.017 3.32-.168 6.936-2.93 8.938l.013.73h4.802v-1.151a.38.38 0 0 1 .372-.384zm-4.958-5.176c.828 1.053 1.08 1.994.72 2.613-.276.483-.864.743-1.717.743a6.53 6.53 0 0 1-1.584-.235c-.468 1.635-1.225 2.688-2.089 2.688s-1.62-1.053-2.077-2.688a6.53 6.53 0 0 1-1.584.235c-.853 0-1.441-.26-1.717-.743-.444-.768.06-1.969 1.212-3.195a6.934 6.934 0 0 1-.492-.57c-.828-1.053-1.08-1.982-.72-2.626.276-.483.864-.743 1.717-.743a6.53 6.53 0 0 1 1.584.236c.468-1.635 1.225-2.688 2.089-2.688s1.62 1.053 2.077 2.7a6.53 6.53 0 0 1 1.584-.235c.853 0 1.441.26 1.717.743.36.644.108 1.573-.72 2.626-.154.199-.318.389-.492.57.174.18.338.37.492.569zm-.985-4.05a6.798 6.798 0 0 0-1.476.21c.129.588.22 1.184.276 1.784.474.35.927.731 1.357 1.14.168-.174.324-.36.468-.533.684-.88.936-1.635.684-2.093-.228-.421-.84-.508-1.309-.508zm-2.64 5.338c.348-.21.684-.433.996-.656.036-.397.048-.793.048-1.214 0-.421-.024-.83-.048-1.214a15.667 15.667 0 0 0-.997-.644A21.38 21.38 0 0 0 16 13.036c-.358.166-.706.352-1.044.557-.36.21-.685.421-.997.644-.036.384-.048.793-.048 1.214 0 .42.024.83.048 1.214A15.667 15.667 0 0 0 16 17.878c.358-.166.706-.352 1.044-.557zm.948-.037c-.24.148-.468.297-.708.446-.24.148-.48.285-.72.408.394.178.799.331 1.212.459.084-.409.156-.843.216-1.313zm-2.533.854l-.72-.408c-.24-.149-.48-.298-.709-.446.043.442.115.88.216 1.313.412-.13.817-.283 1.213-.459zm-1.969-1.833a19.183 19.183 0 0 1-.024-.854c0-.297.012-.57.024-.855-.349.264-.682.549-.996.855.316.303.649.589.996.854zm.54-2.662a9.75 9.75 0 0 1 .696-.446c.253-.149.493-.285.733-.409-.395-.178-.8-.33-1.213-.458-.084.408-.156.842-.216 1.313zm2.521-.855c.24.124.48.26.72.409.24.148.48.297.709.446a9.923 9.923 0 0 0-.216-1.313c-.412.13-.817.282-1.213.458zm1.981 1.82c.012.286.024.558.024.855 0 .297-.012.582-.024.855.348-.285.684-.57.984-.855a9.765 9.765 0 0 0-.984-.854zm-2.521-5.077c-.612 0-1.236.867-1.645 2.34.562.177 1.111.392 1.645.643a13.145 13.145 0 0 1 1.645-.642c-.409-1.474-1.045-2.341-1.645-2.341zm-4.982 2.96c-.264.458-.012 1.226.684 2.08.144.185.3.358.468.544.428-.41.88-.79 1.357-1.138.055-.6.147-1.196.276-1.783-.482-.13-.978-.2-1.476-.211-.469 0-1.069.087-1.309.508zm1.309 6.44c.499-.01.995-.085 1.476-.224a14.572 14.572 0 0 1-.276-1.782c-.483-.344-.94-.725-1.369-1.14-1.032 1.103-1.44 2.093-1.14 2.638.228.421.84.508 1.309.508zm3.673 2.452c.6 0 1.236-.867 1.645-2.34a13.146 13.146 0 0 1-1.645-.644c-.534.251-1.083.466-1.645.644.409 1.473 1.045 2.34 1.645 2.34zm4.982-2.96c.252-.446 0-1.213-.684-2.093-.144-.173-.3-.359-.468-.532-.428.41-.88.79-1.357 1.14-.055.599-.147 1.195-.276 1.783.482.129.978.2 1.476.21.469 0 1.069-.087 1.309-.508zm-4.982-4.78c.97 0 1.758.807 1.765 1.808 0 .997-.783 1.806-1.749 1.808-.966.002-1.752-.803-1.757-1.8-.004-.997.775-1.81 1.741-1.816zm0 3.158c.714-.006 1.291-.601 1.297-1.338 0-.739-.58-1.337-1.297-1.337s-1.297.598-1.297 1.337.581 1.338 1.297 1.338z'
      />
    </g>
  </svg>
)
