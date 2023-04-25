import { Inter } from 'next/font/google'
import Tabs from './components/Tabs'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={inter.className}
    >
      <div className='content'>
        <Tabs />
      </div>
    </main>
  )
}
