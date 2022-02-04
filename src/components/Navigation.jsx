import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { NavHashLink } from "react-router-hash-link"

export default function Navigation() {
    return (
        <NAVSection>
            <h2>
                <NavLinkStyled smooth to='/about'>
                    <p>ABOUT</p>
                </NavLinkStyled>
                <NavLinkStyled smooth to='/'>
                    <p>WORK</p>
                </NavLinkStyled>
                <NavLinkStyled smooth to='/'>
                    <p>CONTACT</p>
                </NavLinkStyled>
            </h2>
        </NAVSection>
    )
}

const NAVSection = styled.div`
    display: flex;
    flex-direction: column;
`

const NavLinkStyled = styled(NavHashLink)`
    &:hover {
        color: #3bdab7;
    }
`
