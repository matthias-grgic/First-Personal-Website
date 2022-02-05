import styled from "styled-components"

export default function About() {
    return (
        <AboutSection>
            <h4>MATTHIAS GRGIC</h4>
            <p>WEB DEVELOPER // GRAFIK & VIDEO-DESIGN // MUSIC PRODUCTION</p>
            <AboutText>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, deserunt perspiciatis! Laudantium tenetur vitae, nihil vero consequatur itaque similique ducimus non quaerat
                hic libero mollitia veniam saepe recusandae, sed, exercitationem natus minima omnis commodi ullam quod iste dolorum numquam ea. Consequatur omnis enim magni aliquid consequuntur ipsa
                odit quidem harum, inventore unde dolorum pariatur praesentium sed voluptatum sequi voluptate perferendis voluptas facere?
            </AboutText>
        </AboutSection>
    )
}

const AboutSection = styled.div`
    display: flex;
    color: #3bdab7;
    flex-direction: column;
    overflow: auto;
    width: 100%;
    height: 100vh;
    h4 {
        color: #3bdab7;
    }
    @media (max-width: 900px) {
        padding: 30px;
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
