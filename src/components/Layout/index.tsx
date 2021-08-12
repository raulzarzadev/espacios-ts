import Head from 'next/head'
import { Counter } from '../Conuter'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer
      </footer>
    </>
  )
}
