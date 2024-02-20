import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Link = styled.ul`
  display: flex;
  margin-left: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    margin-left: 0;
  }
`

export const HeaderBar = styled.div`
  background-color: ${colors.gray};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;

  a,
  span {
    text-decoration: none;
    color: ${colors.white};
    font-weight: bold;
  }

  h1 {
    line-height: 0;
  }
`

export const NavMobile = styled.nav`
  display: none;

  &.is-open {
    display: block;
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 0;

    a {
      display: block;
      text-align: center;
      padding: 16px 0;
    }
  }
`
export const ButtonCart = styled.span`
  display: flex;
  cursor: pointer;

  img {
    margin-left: 16px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    span {
      display: none;
    }
  }
`
export const Hamburguer = styled.div`
  width: 32px;

  span {
    height: 2px;
    display: block;
    width: 100%;
    background-color: ${colors.white};
    margin-bottom: 4px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`
export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    @media (max-width: ${breakpoints.tablet}) {
      flex: 1;
      justify-content: space-between;

      ${Link} {
        display: none;
      }
    }
  }
`
