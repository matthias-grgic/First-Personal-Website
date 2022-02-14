import styled from "styled-components"
import { NavHashLink } from "react-router-hash-link"

export default function Navigation({ flex }) {

    return (
        <NAVSection>
                <NavLinkStyled smooth to='/'>
                    <h2>{flex}</h2>
                </NavLinkStyled>
                <NavLinkStyled smooth to='/about'>
                    <h2>ABOUT</h2>
                </NavLinkStyled>
                <NavLinkStyled smooth to='/work'>
                    <h2>WORK</h2>
                </NavLinkStyled>
        </NAVSection>
    )
}

const NAVSection = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 850px) {
            flex-direction: column;
        h2 {
            font-size: 2rem;
        }

    }
`

const NavLinkStyled = styled(NavHashLink)`
    &:hover {
        color: #3bdab7;
    }
`
