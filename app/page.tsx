import Welcome from './components/home/welcome'
import Guide from './components/home/guide'
import Benefit from './components/home/benefit'
import Funny from './components/home/funny'
import FAQ from './components/home/FAQ'
import Footer from './footer'

export default function Home() {
  return (
    <>
      <Welcome />
      <Guide />
      <Benefit />
      <Funny />
      <FAQ />
      <Footer />
    </>
  )
}
