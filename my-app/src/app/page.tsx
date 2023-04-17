"use client"

import Image from 'next/image'
import { Inter } from 'next/font/google'
import Home from './pages/Home.mdx'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Pages() {
  return (
    <Home/>
  )
}
