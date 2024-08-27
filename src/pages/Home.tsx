import styled from 'styled-components'
import { HelloCidacService } from '../service/helloCidac'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'

export default function Home() {
  const [helloCidac, setHelloCidac] = useState<string>('')
  const [toggleNavBar, setToggleNavBar] = useState<boolean>(false)

  function handleToggleNavBar() {
    setToggleNavBar(!toggleNavBar)
  }

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
        <Header toggleNavBar={handleToggleNavBar} />
      </NavBarContainer>
      <Title>Hello Cidac</Title>
      <h2>{helloCidac ? helloCidac : 'Notworking'}</h2>
      <NavBar isOpen={toggleNavBar} toggleNavBar={handleToggleNavBar} />
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
