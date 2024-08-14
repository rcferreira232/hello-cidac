import styled from 'styled-components'

export default function NotFound() {
  return (
    <NotFoundContainer>
      <Title>404</Title>
      <Title>Page Not Found</Title>
    </NotFoundContainer>
  )
}

const NotFoundContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
`
const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text1};
  font-size: 4.5rem;
`
