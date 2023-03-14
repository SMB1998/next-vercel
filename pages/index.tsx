import Head from 'next/head'
import Image from 'next/image'
import Link  from 'next/link'
import { Inter } from 'next/font/google'
import MainLayout  from '@/components/layouts/MainLayout'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <MainLayout>
        <div className="description">
          <p>
            Get started by editing&nbsp;
            <code className="code">pages/index.tsx</code>
          </p>
          <div>
            <Link
              href="/about"
              
              rel="noopener noreferrer"
            >
             About
            </Link>
          </div>
        </div>

        
        </MainLayout>
    </>
  )
}
