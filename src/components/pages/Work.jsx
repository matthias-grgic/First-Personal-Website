import styled from "styled-components"
import PoolApp from "../img/poolapp.png"

export default function Work() {
    return (
        <WorkSection>
            <SLIDE>
                <Box>
                    <IMG src={PoolApp} />
                    <IMGText>Swimm App</IMGText>
                </Box>
                <Box>
                    {" "}
                    <IMG src={PoolApp} />
                    <IMGText>Swimm App</IMGText>
                </Box>
                <Box>
                    {" "}
                    <IMG src={PoolApp} />
                    <IMGText>Swimm App</IMGText>
                </Box>
                <Box>
                    {" "}
                    <IMG src={PoolApp} />
                    <IMGText>Swimm App</IMGText>
                </Box>
            </SLIDE>
        </WorkSection>
    )
}

const Box = styled.div`
    border: 2px solid #3bdab7;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    width: 280px;
    height: 350px;
    align-items: center;
    justify-content: center;
    padding: 50px;
`

const IMG = styled.img`
    object-fit: contain;
    width: 90%;
`

const IMGText = styled.p`
    margin: 10px 0 10px 0;
`

const WorkSection = styled.div`
    display: flex;
    color: #3bdab7;
    flex-direction: column;
    overflow: auto;
    width: 100%;
    height: 100vh;
    h3 {
        color: #3bdab7;
    }
`

const SLIDE = styled.p`
    display: flex;
    gap: 30px;
    justify-content: space-around;
    font-size: 4.3vw;
    margin-top: 30px;

    text-align: justify;
    white-space: normal;
    word-wrap: normal;
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`
