import React from 'react'

import ActiveLink from './ActiveLink'
import styles from './Navbar.module.css'



function Navbar() {
  const navbarItems = [
    { text:"Home",
      href:"/"  
    },
    { text:"About",
      href:"/about"  
    },
    { text:"Contact",
      href:"/contact"  
    },
    { text:"Pricing",
      href:"/pricing"  
    }
  ]
  return (
    <nav className={styles['navbar-container']}>
      {navbarItems.map((navItem) => (
            <ActiveLink
              key = {navItem.text}
              text = {navItem.text} 
              href = {navItem.href}
            />
          ) 
      )}
    </nav>
  )
}

export default Navbar