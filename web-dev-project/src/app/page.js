import { Poppins } from 'next/font/google'
import Image from 'next/image'
import styles from './page.module.css'
import { NavBar } from '@/components/NavBar/page'
import { CategoriasSection } from '@/components/CategoriasSection/page.js'

export default function Home() {
  return (
    <>
      <NavBar />
      <CategoriasSection />
    </>
  )
}