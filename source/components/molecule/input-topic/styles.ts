import theme from '@/theme'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  min-height: fit-content;
  flex-direction: row;
  justify-content: center;
  margin: 8px;
  align-content: center;

  //outlineOffset: ? NumberOrString;
  //outlineStyle: ? string;
`
export const Input = styled.TextInput`
  flex: 4;
  color: ${theme.COLORS.BORDER_BUTTON};
  background-color: ${theme.COLORS.BACKGROUND_INPUT};
  font-weight: 500;
  padding: 8px;
  border-radius: 2px;
  border-color: ${theme.COLORS.BORDER_BUTTON};
`

export const ContainerIcon = styled.View`
  background-color: ${theme.COLORS.WHITE};
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  border-left-width: 0px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-color: ${theme.COLORS.BORDER_BUTTON};
  border-width: 0.4px;
  border-left: 0;
  padding-right: 4px;
`
