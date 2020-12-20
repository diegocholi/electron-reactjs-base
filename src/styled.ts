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
`
