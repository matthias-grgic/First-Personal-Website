import styled from "styled-components"
import { NavHashLink } from "react-router-hash-link"

export default function Navigation({ flex }) {
    return (
        <NAVSection>
            <h2>
                <NavLinkStyled smooth to='/'>
                    <p>{flex}</p>
                </NavLinkStyled>
                <NavLinkStyled smooth to='/about'>
                    <p>ABOUT</p>
                </NavLinkStyled>
                <NavLinkStyled smooth to='/work'>
                    <p>WORK</p>
                </NavLinkStyled>
            </h2>
        </NAVSection>
    )
}

const NAVSection = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`

const NavLinkStyled = styled(NavHashLink)`
    &:hover {
        color: #3bdab7;
    }
`
