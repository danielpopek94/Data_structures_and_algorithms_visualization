import { Inter } from 'next/font/google'
import { Button } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header className='flex flex-row justify-between'>
        <img src="/homepage/hero-background.jpg" alt="background-image"
        />
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
        <div className="container">
          <div className="content">
            <a href="/linked-list" className="content__item-link">
              <div className="content__item">
                <img className="content__image" src="/Images/linked-list-preview.jpg" />
                <div className="content__info-container">
                  <p>LINKED LIST</p>
                </div>
              </div>
            </a>

            <a href="/array" className="content__item-link">
              <div className="content__item">
                <img className="content__image" src="/Images/array-preview.jpg" />
                <div className="content__info-container">
                  <p>ARRAY</p>
                </div>
              </div>
            </a>

            <a href="/stack" className="content__item-link">
              <div className="content__item">
                <img className="content__image" src="/Images/stack-preview.jpg" />
                <div className="content__info-container">
                  <p>STACK</p>
                </div>
              </div>
            </a>

            <a href="/queue" className="content__item-link">
              <div className="content__item">
                <img className="content__image" src="/Images/queue-preview.jpg" />
                <div className="content__info-container">
                  <p>QUEUE</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </main>
      <footer className='mt-10'>
        <div style={{ height: '30vh' }}></div>
      </footer >
    </>
  )
}
