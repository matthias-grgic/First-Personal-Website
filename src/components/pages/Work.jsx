import { useEffect, useState } from 'react'
import styled from 'styled-components'
import PoolApp from '../img/poolapp.png'

export default function Work() {
  const [workdata, setWorkdata] = useState([])

  useEffect(() => {
    const fetchFromApi = async () => {
      const response = await fetch('https://api.github.com/users/matthias-grgic/repos')
      const api = await response.json()
      setWorkdata(api)
      fetchFromApi()
    }
    fetchFromApi().catch(console.error)
  }, [])

  return (
    <WorkSection>
      {workdata.map((item, index) => (
        <LinkStyled href={item.html_url}>
          <Box key={index}>
            <Name>{item.name}</Name>
            <div>{item.description}</div>
          </Box>
        </LinkStyled>
      ))}
    </WorkSection>
  )
}

const Box = styled.div`
  border: 2px solid #3bdab7;
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 200px;
  align-items: center;
  justify-content: center;
  padding: 30px;
  &:hover {
    background-color: rgb(206, 250, 240, 0.2);
  }
`

const LinkStyled = styled.a``

const Name = styled.div`
  color: white;
  font-size: 2rem;
  text-align: center;
  margin: 10px 0 10px 0;
  text-transform: uppercase;
`

const WorkSection = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  color: #3bdab7;
  width: 100%;
  overflow: auto;
  height: 100vh;
  h3 {
    color: #3bdab7;
  }
`
