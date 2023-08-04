import './globals.css'
import styles from './page.module.css'
import 'animate.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav className={styles.nav}>
          <h1>My navbar</h1>
        </nav>
        {children}
      </body>
    </html>
  )
}
