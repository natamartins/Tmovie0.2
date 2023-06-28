import { Roboto } from 'next/font/google'
import '../Styles/styles.scss'
import Image from 'next/image'
import Link from 'next/link'

import NavBar from '../Components/BoxNavBar/Index'
import Imgfooter from '@/img/imgfooter.jpg'


const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Tmovies',
  description: 'web criado para que você tenha acesso exclusivos de filmes e series que iram lanças!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <header>
          <nav>
            <NavBar />
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer className='footer'>
          <Image src={Imgfooter} alt={''} />
          <div>
            <h2><span>T</span>movies</h2>
            <ul>
              <li><Link href="">Home</Link></li>
              <li><Link href="">Movie</Link></li>
              <li><Link href="">Serie</Link></li>
            </ul>
            <ul>
              <li><Link href="">About</Link></li>
              <li><Link href="">More</Link></li>
              <li><Link href="">Company</Link></li>
            </ul>
            <ul>
              <li><Link href="">Belo Horizonte  MG</Link></li>
              <li><Link href="">Linkedin</Link></li>
              <li><Link href="">Instagram</Link></li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  )
}
