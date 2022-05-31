import styled from 'styled-components'

export const Container = styled.div`
  @media (min-width: 576px) {
    max-width: 540px
  }
  @media (min-width: 768px) {
    max-width: 720px
  }
  @media (min-width: 992px) {
    max-width: 960px
  }
  @media (min-width: 1200px) {
    max-width: 1220px
  }

  width: 100%;
  padding-right: 7.5px;
  padding-left: 7.5px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1220px;
`
