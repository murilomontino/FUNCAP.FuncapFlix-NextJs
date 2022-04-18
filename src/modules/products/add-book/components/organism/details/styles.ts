import theme from '@/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  @media (max-width: ${theme.CONSTANTS.SCREEN.LARGE}px) {
    border-left: 1px solid ${theme.COLORS.BORDER_LIGHT};
  }
`
