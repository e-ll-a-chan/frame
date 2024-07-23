import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [clicked, setClicked] = useState(false)

  return (
    <>
      <Head>
        <title>Warpcast Frame</title>
        <meta property="og:title" content="Click me!" />
        <meta property="og:image" content="https://raw.githubusercontent.com/e-ll-a-chan/game/9fe190ceaa75054583595c5221f0a7c96fc2f199/0kcal.jpg" />
        <meta name="fc:frame" content="vNext" />
        <meta name="fc:frame:image" content="https://raw.githubusercontent.com/e-ll-a-chan/game/9fe190ceaa75054583595c5221f0a7c96fc2f199/0kcal.jpg" />
        <meta name="fc:frame:button:1" content="Click me" />
        <meta name="fc:frame:post_url" content="https://0kcal-game.vercel.app/api/handle-click" />
      </Head>
      <main>
        <h1>{clicked ? 'おつかれ生' : 'Click the button!'}</h1>
      </main>
    </>
  )
}
