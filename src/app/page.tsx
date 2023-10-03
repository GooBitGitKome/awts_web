'use client'
import TopContents from '@/components/TopContents'
import Burger from '@/components/Burger'

export default function Home() {

  return (
    <main className='light text-foreground bg-background w-[100%] h-[100%]' id="main">
      <Burger/>
      <TopContents />
    </main>
  )
}

