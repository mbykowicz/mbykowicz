import Banner from '@/components/Banner'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main className='grid gap-32 bg-hero-bg-image bg-top bg-origin-content bg-no-repeat'>
      <Hero />
      <Banner />
    </main>
  )
}
