import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Warpcast Frame</title>
        <meta property="og:title" content="Click me!" />
        <meta property="og:image" content="https://raw.githubusercontent.com/e-ll-a-chan/frame/main/pic/0kcal.jpg" />
        <meta name="fc:frame" content="vNext" />
        <meta name="fc:frame:image" content="https://raw.githubusercontent.com/e-ll-a-chan/frame/main/pic/0kcal.jpg" />
        <meta name="fc:frame:button:1" content="Click me" />
        <meta name="fc:frame:post_url" content="https://0kcal-game.vercel.app/api/handle-click" />
      </Head>
      <main>
        <h1>Welcome to my Warpcast Frame</h1>
      </main>
    </>
  )
}
