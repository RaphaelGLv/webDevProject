import { Poppins } from 'next/font/google'
import Image from 'next/image'
import styles from './page.module.css'
import { NavBar } from '@/components/NavBar/page'
<<<<<<< HEAD
import { Footer } from '@/components/Footer/page.js'
=======
import { AnimalList } from '@/components/AnimalList/page'
import { SearchSection } from '@/components/SearchSection/page'
import { CategoriasSection } from '@/components/CategoriasSection/page.js'
import LoginPage from './LoginPage/page'
import Carrossel from '@/components/Carrossel/page'
>>>>>>> 0bf7bbae605feb710a9006a379a6af75a9a8197a

export default function Home() {
  return (
    <>
      <NavBar />
<<<<<<< HEAD
      <Footer />
=======
      <SearchSection />
      <AnimalList />
      <Carrossel/>
      <CategoriasSection />
      <LoginPage />
>>>>>>> 0bf7bbae605feb710a9006a379a6af75a9a8197a
    </>
  )
}
