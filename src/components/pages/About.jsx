import styled from 'styled-components'

export default function About() {
  return (
    <AboutSection>
      <h4>MATTHIAS GRGIC</h4>
      <div>WEB DEVELOPER</div>
      <AboutText>
        Hi! I created this website to test some new react hooks, javascript techniques and to learn more about responsive design. For more information abou me and my work visit one of the github or
        linkedin links below.
      </AboutText>
      <AboutText>2022</AboutText>
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

const AboutText = styled.div`
  display: inline-block;
  font-size: 6vw;
  margin-top: 30px;
  text-align: justify;
  white-space: pre-line;
  word-wrap: normal;
`
