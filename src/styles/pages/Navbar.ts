import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Nav = styled.nav<{ scroll: boolean; click: boolean }>`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  z-index: 100;
  &.scroll-bg-change {
    background: ${({ scroll }) => (scroll ? '#242424' : 'transparent')};
  }
  &.click-bg-change {
    background: ${({ click }) => (click ? '#242424' : 'transparent')};
    transition: all 0.5s ease;
  }
`
export const IconWrap = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    height: 40px;
    width: 40px;
    transform: translate(-50%, 50%);
  }
`
export const MenuIcon = styled(FontAwesomeIcon)`
  width: 100%;
  height: 100%;
  font-size: 2rem;
  color: #fff;
`
export const NavMenu = styled.ul<{ click: boolean }>`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px;
  list-style: none;
  z-index: 10;
  text-align: center;
  width: 100vw;
  justify-content: center;
  margin-right: 2rem;
  @media screen and (max-width: 960px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    transition: all 0.5s ease;
    top: 80px;
    align-items: center;
    height: 90vh;
    width: 100%;
    opacity: 1;
    background: ${({ click }) => (click ? '#242424' : '')};
    opacity: ${({ click }) => (click ? 1 : 0)};
    left: ${({ click }) => (click ? '0' : '-100%')};
  }
`
export const NavItems = styled.li`
  display: flex;
  justify-self: center;
  align-items: center;
  margin-bottom: 10px;
`
export const NavMenuLinks = styled.a`
  &.nav-links {
    color: #fff;
    display: flex;
    height: 80%;
    justify-self: center;
    text-decoration: none;
    align-items: center;
    padding: 0.5rem 1rem;
  }
  &.active {
    color: #fa923f;
  }
  :hover {
    border-bottom: 4px solid #fff;
    transition: all 0.2s ease-out;
  }
  @media screen and (max-width: 960px) {
    &.nav-links {
      text-align: center;
      font-size: 2rem;
      z-index: 1;
    }
  }
`
export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  @media screen and (max-width: 960px) {
    display: none;
  }
`
