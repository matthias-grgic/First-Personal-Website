import styled from 'styled-components'
import GitHubLogo from '../img/github.png'
import LinkedInLogo from '../img/linkedin.png'

export default function Contact() {
  return (
    <ContactSection>
      <LinkSection>
        <a href='https://github.com/matthias-grgic/' target='_blank' rel='noopener noreferrer'>
          <IMGStyled src={GitHubLogo} alt='link to github profile' />
        </a>
        <a href='https://www.linkedin.com/feed/' target='_blank' rel='noopener noreferrer'>
          <IMGStyled src={LinkedInLogo} alt='link to github profile' />
        </a>
      </LinkSection>
    </ContactSection>
  )
}

const ContactSection = styled.div`
  display: flex;
  color: #3bdab7;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  h3 {
    color: #3bdab7;
  }

  a {
    width: 50px;
  }
  margin-bottom: 20px;
`

const LinkSection = styled.section`
  display: flex;
  gap: 15px;
  margin-top: 30px;
`

const IMGStyled = styled.img`
  width: 100%;
`
