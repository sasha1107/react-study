"use client"

import Image from 'next/image'
import { Inter } from 'next/font/google'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home.mdx'

const inter = Inter({ subsets: ['latin'] })

export default function Pages() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
  )
}
