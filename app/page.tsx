import React from 'react'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import poza1 from './photo/poza1.jpg'
import Navbar from './nav'
import Image from 'next/image'
import poza2 from './photo/poza2.png'
import EastIcon from '@mui/icons-material/East'

const inter = Inter({ subsets: ['latin'] })

const cities = [
  { name: 'București', country: 'România', temperature: '25°C' },
  { name: 'Cluj-Napoca', country: 'România', temperature: '22°C' },
  { name: 'Timișoara', country: 'România', temperature: '28°C' },
  { name: 'Iași', country: 'România', temperature: '24°C' },
  { name: 'Constanța', country: 'România', temperature: '27°C' },
  { name: 'Craiova', country: 'România', temperature: '23°C' },
]

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.div1}>
          <Image src={poza1} alt='img1' className={styles.poza1} />
          <p className={styles.paragraf1}>
            Sistem Integrat <br /> de Gestiune <br /> a Lucrărilor Agricole
          </p>
        </div>
        <div className={styles.div2}>
          <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <h1 className={styles.titlul2}>Tipuri de culturi</h1>
                <p className={styles.paragraf2}>
                  Cele mai întâlnite culturi din România sunt:
                </p>
                <p className={styles.arrow2}>
                  <EastIcon />
                </p>
              </div>
              <div className={styles.flipCardBack}>
                <ol>
                  <li>Culturi cerealiere:</li>
                  <ul>
                    <li>Grâul: Cultivat pentru producția de făină și pâine.</li>
                    <li>
                      Porumbul: Utilizat în alimentația umană, hrana animalelor
                      și bioetanol.
                    </li>
                  </ul>
                  <br />
                  <li>Culturi oleaginoase:</li>
                  <ul>
                    <li>
                      Floarea-soarelui: Semințele sunt folosite pentru obținerea
                      uleiului comestibil.
                    </li>
                    <li>
                      Rapița: Cultivată pentru uleiul său, utilizat în industria
                      alimentară.
                    </li>
                  </ul>
                  <br />
                  <li>Legume și fructe:</li>
                  <ul>
                    <li>
                      Cartoful: Cultivat pe scară largă și important în
                      alimentația locală.
                    </li>
                    <li>
                      Roșii, ardei, ceapă: Diverse legume cultivate pentru
                      consumul uman.
                    </li>
                    <li>
                      Mere, pere, prune: Fructe obișnuite în producția locală și
                      industria alimentară.
                    </li>
                  </ul>
                  <br />
                  <li>Culturi specifice:</li>
                  <ul>
                    <li>
                      Vița de vie: Practicată în diverse regiuni pentru
                      producția de vinuri.
                    </li>
                    <li>
                      Plante furajere: Pentru hrana animalelor, inclusiv
                      lucernă, trifoi, ovăz și secară.
                    </li>
                  </ul>
                  <br />
                  <li>Legumicultură protejată:</li>
                  <ul>
                    <li>
                      Cultivarea legumelor în sere și solarii pentru producție
                      continuă.
                    </li>
                  </ul>
                </ol>
              </div>
            </div>
          </div>
          <Image src={poza2} alt='poza2' className={styles.poza2}></Image>
        </div>
        <div className={styles.div3}>
          <h1 className={styles.titlul3}>Vremea din orașul tău</h1>
          <div className={styles.cardVreme}>
            <div className={styles.oras}>
              <p>București</p>
              <p></p>
              <p>28°C</p>
            </div>
            <div className={styles.oras}>
              <p>Cluj-Napoca</p>
              <p>20°C</p>
            </div>
            <div className={styles.oras}>
              <p>Sibiu</p>
              <p>17°C</p>
            </div>
            <div className={styles.oras}>
              <p>Timișoara</p>
              <p>30°C</p>
            </div>
            <div className={styles.oras}>
              <p>Baia Mare</p>
              <p>20°C</p>
            </div>
            <div className={styles.orasI}>
              <p>Iași</p>
              <p>25°C</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
