import { Poppins } from 'next/font/google'
import Image from 'next/image'
import styles from './page.module.css'
import { NavBar } from '@/components/NavBar/page'
import { SearchSection } from '@/components/SearchSection/page'
import { CategoriasSection } from '@/components/CategoriasSection/page.js'
import Carrossel from '@/components/Carrossel/page'

export default function Home() {
  return (
    <>
      <NavBar />
      <SearchSection />
      <Carrossel/>
      <CategoriasSection />
    </>
  )
}
