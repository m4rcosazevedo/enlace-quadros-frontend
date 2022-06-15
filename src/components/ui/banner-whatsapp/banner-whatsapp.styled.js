import { ExternalLink } from '../../external-link/external-link'
import styled from 'styled-components'

const Background = styled.div`
  background: #13ab4e;
  color: var(--light);
  margin-top: 6.75rem;
  margin-bottom: 1.7rem;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .3);
`

const Link = styled(ExternalLink)`
  &, &:hover {
    color: var(--light);
  }
`

const Title = styled.div`
  margin-top: 1.7rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`

export {
  Background,
  Link,
  Title
}
