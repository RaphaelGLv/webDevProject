import { Poppins } from 'next/font/google'
import Image from 'next/image'
import styles from './page.module.css'
import { NavBar } from '@/components/NavBar/page'
import { SearchSection } from '@/components/SearchSection/page'
import { AnimalList } from '@/components/AnimalList/page'
import Carrossel from '@/components/Carrossel/page'
import { CategoriasSection } from '@/components/CategoriasSection/page.js'
import { Footer } from '@/components/Footer/page.js'


export default function Home() {
  return (
    <>
      <NavBar />
      <SearchSection />
      <AnimalList />
      <Carrossel/>
      <CategoriasSection />
      <Footer />
    </>
  )
}
