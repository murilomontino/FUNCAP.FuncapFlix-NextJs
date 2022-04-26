import theme from '@/theme'
import { MotiView } from 'moti'
import styledWeb from 'styled-components'
import styled from 'styled-components/native'

export const ContainerDescription = styledWeb.div`
display: flex;
  flex: 2;

  @media (max-width: ${theme.CONSTANTS.SCREEN.MEDIUM}px) {
    display: none;
  }
`

export const ContainerButtons = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

export const ContainerAnimated = styled(MotiView)`
  margin-inline: -12px;
  background-color: ${theme.COLORS.THUMBNAIL_CARD_BACKGROUND};
  border-radius: 8px;
  box-shadow: 10px 5px 5px black;
`
