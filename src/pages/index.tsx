import { Inter } from 'next/font/google'
import { Button } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header className='flex flex-row justify-between'>
        <a href="/"><img
          src="/next.svg"
          alt="main_logo"
          className='w-20 p-2'
        /></a>
        <nav className='w-2/5'>
          <ul className='flex flex-row justify-around'>
            <li>Algorithms</li>
            <li>Data structures</li>
            <li>Documentation</li>
          </ul>
        </nav>
      </header>
      <main className={`flex justify-center`}>
        <div className="container flex flex-col justify-center items-center h-screen">
          <h1 className='mb-10 text-xl'>Site is under construction</h1>
          <Button variant="outlined" href="/content">Content</Button>
        </div>
      </main>
    </>
  )
}
