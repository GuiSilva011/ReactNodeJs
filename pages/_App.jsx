import Head from 'next/head'

import '../src/global.css'

function App({ Component,pageProps }){
return ( <>
       <Head>
       <title>Titulo padrão</title>
       </Head>
       <Component {...pageProps} />
</>
  )
}

export default App