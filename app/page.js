import Community from '@/components/Community'
import Ecosystem from '@/components/Ecosystem'
import Faq from '@/components/Faq'
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import Presale from '@/components/Presale'
import Roadmap from '@/components/Roadmap'
import Sets from '@/components/Sets'
import Token from '@/components/Token'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-[#000] text-white font-roboto flex justify-center items-center flex-col w-full overflow-hidden'>
      <Nav />
      <Hero />
      <Ecosystem />
      <Sets />
      <Presale />
      <Token />
      <Roadmap />
      <Faq />
      <Community />
    </main>
  )
}
