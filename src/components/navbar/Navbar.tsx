import Link from 'next/link'
import { FC } from 'react'

interface NavbarProps {
  
}

const Navbar: FC<NavbarProps> = ({}) => {
  return <>

<header>
      <nav>
        <Link href="#home" id="logo">Site Logo</Link>
        <i className="fas fa-bars" id="ham-menu"></i>
        <ul id="nav-bar">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        
        </ul>
      </nav>
    </header>

  </>
}

export default Navbar