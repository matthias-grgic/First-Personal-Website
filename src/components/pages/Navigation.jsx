import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export default function Navigation({ flex, styled }) {
  return (
    <NAVSection styled={styled}>
      <NavLinkStyled to='/'>
        <h2>{flex}</h2>
      </NavLinkStyled>
      <NavLinkStyled to='/about'>
        <h2>ABOUT</h2>
      </NavLinkStyled>
      <NavLinkStyled to='/work'>
        <h2>WORK</h2>
      </NavLinkStyled>
    </NAVSection>
  )
}

const NAVSection = styled.div`
  display: flex;
  gap: ${(p) => (p.styled === 'yes' ? '' : '20px')};
  flex-direction: ${(p) => (p.styled === 'yes' ? 'column' : 'row')};
  @media (max-width: 850px) {
    h2 {
      font-size: ${(p) => (p.styled === 'yes' ? '' : '2rem')};
    }
  }
`

const NavLinkStyled = styled(NavLink)`
  &.active {
    color: #3bdab7;
  }
`
