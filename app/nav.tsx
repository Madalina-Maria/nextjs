import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Logo1 from './photo/logo1.png'
import Image from 'next/image'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import PercentIcon from '@mui/icons-material/Percent'
import LoginIcon from '@mui/icons-material/Login'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import HelpIcon from '@mui/icons-material/Help'

export default function Navbar() {
  return (
    <div>
      <nav className={styles.navHome}>
        <div className={styles.logo}>
          <Link href='/'>
            <Image src={Logo1} alt='Logo' className={styles.image} />
          </Link>
        </div>
        <div className={styles.navigation}>
          <ul>
            <li className={styles.list}>
              <a href='/'>
                <span className={styles.icon}>
                  <LocalOfferIcon />
                </span>
                <span className={styles.text}>Licitații</span>
              </a>
            </li>
            <li className={styles.list}>
              <a href='/'>
                <span className={styles.icon}>
                  <PercentIcon />
                </span>
                <span className={styles.text}>Anunțuri</span>
              </a>
            </li>
            <li className={styles.list}>
              <a href='/'>
                <span className={styles.icon}>
                  <LoginIcon />
                </span>
                <span className={styles.text}>Conectare</span>
              </a>
            </li>
            <li className={styles.list}>
              <a href='/'>
                <span className={styles.icon}>
                  <HelpIcon />
                </span>
                <span className={styles.text}>Ajutor</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
