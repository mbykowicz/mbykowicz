import Banner from '@/components/Banner'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main className='grid gap-24 bg-top bg-no-repeat lg:gap-32 bg-hero-bg-image bg-origin-content'>
      <Hero />
      <Banner />
    </main>
  )
}
