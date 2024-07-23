import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [clicked, setClicked] = useState(false)

  return (
    <html>
      <Head>
        <title>Warpcast Frame</title>
        <meta property="og:title" content="Click me!" />
        <meta property="og:image" content="https://picsum.photos/1200/630" />
        <meta name="fc:frame" content="vNext" />
        <meta name="fc:frame:image" content="https://picsum.photos/1200/630" />
        <meta name="fc:frame:button:1" content="Click me" />
        <meta name="fc:frame:post_url" content="https://0kcal-game.vercel.app/api/handle-click" />
      </Head>
      <body>
        <h1>{clicked ? 'おつかれ生' : 'Click the button!'}</h1>
      </body>
    </html>
  )
}
