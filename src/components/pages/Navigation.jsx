import styled from "styled-components"
import { NavHashLink } from "react-router-hash-link"
import anime from "animejs/lib/anime.es.js"

export default function Navigation({ flex }) {
    anime({
        targets: NavLinkStyled,
        translateX: 250,
        rotate: "1turn",
        backgroundColor: "#FFF",
        duration: 800,
    })

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
    @media (max-width: 850px) {
        h2 {
            flex-direction: row;
            font-size: rem;
        }
    }
`

const NavLinkStyled = styled(NavHashLink)`
    &:hover {
        color: #3bdab7;
    }
`
