import styled from "styled-components"
import GitHubLogo from "../img/github.png"
import LinkedInLogo from "../img/linkedin.png"
import NeueFischeLogo from "../img/neuefische.png"

export default function About() {
    return (
        <AboutSection>
            <h3>MATTHIAS GRGIC</h3>
            <p>WEB DEVELOPER // GRAFIK & VIDEO-DESIGN // MUSIC PRODUCTION</p>
            <AboutText>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, deserunt perspiciatis! Laudantium tenetur vitae, nihil vero consequatur itaque similique ducimus non quaerat
                hic libero mollitia veniam saepe recusandae, sed, exercitationem natus minima omnis commodi ullam quod iste dolorum numquam ea. Consequatur omnis enim magni aliquid consequuntur ipsa
                odit quidem harum, inventore unde dolorum pariatur praesentium sed voluptatum sequi voluptate perferendis voluptas facere?
            </AboutText>
            <LinkSection>
                <a href='http://' target='_blank' rel='noopener noreferrer'>
                    <IMGStyled src={GitHubLogo} alt='link to github profile' />
                </a>
                <a href='http://' target='_blank' rel='noopener noreferrer'>
                    <IMGStyled src={LinkedInLogo} alt='link to github profile' />
                </a>
                <a href='http://' target='_blank' rel='noopener noreferrer'>
                    <IMGStyled src={NeueFischeLogo} alt='link to github profile' />
                </a>
            </LinkSection>
        </AboutSection>
    )
}

const AboutSection = styled.div`
    display: flex;
    color: #3bdab7;
    flex-direction: column;
    overflow: auto;
    width: 100%;
    h3 {
        color: #3bdab7;
    }
`

const AboutText = styled.p`
    display: inline-block;
    font-size: 4.3vw;
    margin-top: 30px;
    text-align: justify;
    white-space: normal;
    word-wrap: normal;
    /* @media (max-width: 900px) {
        width: 100%;
    } */
`

const LinkSection = styled.section`
    display: flex;
    gap: 15px;
    margin-top: 30px;
`

const IMGStyled = styled.img`
    width: 30px;
    height: 100%;
`
