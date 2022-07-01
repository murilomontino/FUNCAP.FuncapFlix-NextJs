import theme from '@/theme'
import styled from 'styled-components/native'

export const ContainerButton = styled.View`
  max-height: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  z-index: -1;
`

export const Container = styled.View`
  margin-right: 8px;
  margin-top: 12px;
`

export const Important = styled.Text`
  max-height: 20px;
  font-size: 16px;
  text-align: center;
  margin-bottom: 2px;
  color: ${theme.COLORS.IMPORTANT};
`
