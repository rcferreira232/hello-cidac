import styled from 'styled-components'
import { HelloCidacService } from '../service/helloCidac'
import { useEffect, useState } from 'react'
import NavBar from '../components/Header'

export default function Home() {
  const [helloCidac, setHelloCidac] = useState<string>('')

  async function getHelloCidac() {
    try {
      const response = await HelloCidacService.getHelloCidac()
      setHelloCidac(response.hello)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getHelloCidac()
  }, [])

  return (
    <HomeContainer>
      <NavBarContainer>
        <NavBar />
      </NavBarContainer>
      <Title>Hello Cidac</Title>
      <h2>{helloCidac ? helloCidac : 'Notworking'}</h2>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.black};
`
const NavBarContainer = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
`

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text1};
  font-size: 4.5rem;
`
