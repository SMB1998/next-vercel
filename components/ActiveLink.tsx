import React, {CSSProperties, FC} from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'
import { useRouter } from 'next/router'

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline'
}

interface Props {
  text: string;
  href: string;
}

const ActiveLink: FC<Props> = ({ text, href}) => {
const { asPath }= useRouter();
  return (
    <Link  
      style= { asPath === href? style : undefined}
      href={href}>
        {text}
    </Link>
  )
}

export default ActiveLink