import { Inter } from 'next/font/google'
import Tabs from './components/Tabs'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header>
        <img src="/next.svg" alt="main_logo" className='w-20 p-2' />
      </header>
      <main className={`flex flex-row ${inter.className}`}>
        <nav className='w-1/6 px-2'>
          <ul>
            <a href="#">
              <li className='linked-list'>Linked list</li>
            </a>
            <a href="#">
              <li className='array'>Array</li>
            </a>
            <a href="#">
              <li className='stack'>Stack</li>
            </a>
            <a href="#">
              <li className='queue'>Queue</li>
            </a>
          </ul>
        </nav>
        <div className='content w-5/6'>
          <Tabs />
        </div>
      </main>
    </>
  )
}
