"use client"

import Image from 'next/image'
import { Inter } from 'next/font/google'
import { MDXProvider } from '@mdx-js/react'
import Highlight from './pages/Highlight.mdx'
import Testing from './pages/Testing.mdx'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MDXProvider>
    <div>Hello
      <Highlight/>
      <Testing />
    </div>
    </MDXProvider>
  )
}
