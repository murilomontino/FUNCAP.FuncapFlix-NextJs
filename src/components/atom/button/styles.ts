import theme from '@/theme'
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  min-width: 30vh;
  height: 50px;
  max-width: 60vh;
  margin: 8px;
  background-color: ${theme.COLORS.BUTTON_900};
  border-width: 2px;
  border-color: ${theme.COLORS.BORDER_BUTTON};
  justify-content: center;
  align-items: center;
  align-self: center;
`

export const Text = styled.Text`
  color: ${theme.COLORS.TEXT};
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`
