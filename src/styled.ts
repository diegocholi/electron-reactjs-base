import styled from 'styled-components'

interface IProps {
  backgroundColor: string
}

export const AppStyled = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${(props: IProps) => props.backgroundColor};
  color: #fff;
  text-align: center;
`
export const HeaderApp = styled.p`
  background-color: #201;
  position: absolute;
  padding: 20px 20px 20px 20px;
  left: 0;
  right: 0;
  top: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
