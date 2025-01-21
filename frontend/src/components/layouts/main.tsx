import React from 'react'
import { Header } from '../common/header/header'
import { Footer } from '../common/footer/footer'

export const MainLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}