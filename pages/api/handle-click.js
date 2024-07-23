export default function handler(req, res) {
  if (req.method === 'POST') {
    res.status(200).json({
      flags: [],
      image: "https://raw.githubusercontent.com/e-ll-a-chan/game/9fe190ceaa75054583595c5221f0a7c96fc2f199/0kcal.jpg",
      post: {
        content: "おつかれ生"
      }
    })
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}