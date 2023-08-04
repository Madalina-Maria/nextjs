import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.Hello}>Hello World!</h1>
      <Link href={'/about'} className={styles.link}>
        Link from about page
      </Link>
    </main>
  )
}
