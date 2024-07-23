import Head from 'next/head'


export default function Home() {
  const [clicked, setClicked] = useState(false)

  return (
    <div>
      <Head>
        <title>Warpcast Frame</title>
        <meta property="og:title" content="Click me!" />
        <meta property="og:image" content="https://picsum.photos/1200/630" />
        <meta name="fc:frame" content="vNext" />
        <meta name="fc:frame:image" content="https://picsum.photos/1200/630" />
        <meta name="fc:frame:button:1" content="Click me" />
        <meta name="fc:frame:post_url" content="https://0kcal-game.vercel.app/" />
      </Head>

      <h1>{clicked ? 'おつかれ生' : 'Click the button!'}</h1>
    </div>
  )
}
