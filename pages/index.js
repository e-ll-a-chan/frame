import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [clicked, setClicked] = useState(false)

  return (
    <div>
      <Head>
        <title>Warpcast Frame</title>
        <meta property="og:title" content="Click me!" />
        <meta property="og:image" content="https://github.com/e-ll-a-chan/frame/blob/main/pic/0kcal.jpg?raw=true" />
        <meta name="fc:frame" content="vNext" />
        <meta name="fc:frame:image" content="https://github.com/e-ll-a-chan/frame/blob/main/pic/0kcal.jpg?raw=true" />
        <meta name="fc:frame:button:1" content="Click me" />
        <meta name="fc:frame:post_url" content="https://0kcal-game.vercel.app/api/handle-click" />
      </Head>

      <h1>{clicked ? 'おつかれ生' : 'Click the button!'}</h1>
    </div>
  )
}
