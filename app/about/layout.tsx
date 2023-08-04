import React from 'react'
import styles from './style.module.css'
import Head from './head'

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Head />
      <nav className={styles.nav}>AboutNavBar</nav>
      <main className={styles.main}>{children}</main>
    </div>
  )
}
