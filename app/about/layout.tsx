import React from 'react'
import styles from './style.module.css'

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <nav className={styles.nav}>AboutNavBar</nav>
      <main className={styles.main}>{children}</main>
    </div>
  )
}
