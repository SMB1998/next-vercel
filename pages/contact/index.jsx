
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import MainLayout from '@/components/layouts/MainLayout'
import Navbar from '@/components/Navbar'


const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  return (
    <>
    
      <MainLayout>
        
        <div className={"description"}>
          <p>
            Get started by editing&nbsp;
            <code className={"code"}>pages/index.tsx</code>
          </p>
          <div>
            <Link
              href="/"
              
              rel="noopener noreferrer"
            >
             Home
            </Link>
          </div>
        </div>
        
        </MainLayout>

        
      
    </>
  )
}
