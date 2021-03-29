import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  IconWrap,
  MenuIcon,
  Nav,
  NavMenuLinks,
  NavMenu,
  NavBtn
} from '../styles/pages/Navbar'
import Button from '../styles/pages/Button'
import { faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons'
import { NavLinkData } from '../data/navMenuData'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  const closeMobileMenu = () => setClick(false)

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
    return () => {
      window.removeEventListener('scroll', changeBackground)
    }
  }, [])

  const handleClick = () => setClick(!click)
  return (
    <Nav
      className={scroll ? 'scroll-bg-change' : 'click-bg-change'}
      scroll={scroll}
      click={click}
    >
      <IconWrap onClick={handleClick}>
        <MenuIcon icon={click ? faTimes : faChevronRight} />
      </IconWrap>
      <NavMenu click={click}>
        {NavLinkData.map(item => (
          <Link key={item.id} href={item.href} passHref>
            <NavMenuLinks className="nav-links" onClick={closeMobileMenu}>
              {item.title}
            </NavMenuLinks>
          </Link>
        ))}
      </NavMenu>
      <NavBtn>
        <Button
          href="https://github.com/tuboihirokidesu/portfolio"
          primary
          big={false}
        >
          GitHub
        </Button>
      </NavBtn>
    </Nav>
  )
}

export default Navbar
