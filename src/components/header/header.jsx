import { Icon } from '../icon/icon'
import { ExternalLink } from '../external-link/external-link'
import styled from 'styled-components'
import { Container } from '../../assets/styles/base'
import envs from '../../config/envs'

const B = styled.header`
  background: #c3a125;
`

const H = styled.header`
  display: flex;
  padding: 10px 0;
  align-items: center;
  justify-content: space-between;
`

const L = styled(ExternalLink)`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  transition: color .4s ease;

  &:hover {
    color: #232220;
  }
`

const Social = styled.div`
  ${L} {
    font-size: 20px;
    width: 25px;
    height: 25px;
    display: inline-block;
    margin-right: 5px;
  }
`

const AboutMe = styled.div``

const { SOCIAL } = envs

export const Header = (props) => (
  <B>
    <Container>
      <H>
        <Social>
          <L href={SOCIAL.WHATSAPP}><Icon icon="whatsapp" /></L>
          <L href={SOCIAL.INSTAGRAM}><Icon icon="instagram" /></L>
        </Social>
        <AboutMe>
          <L href={SOCIAL.WHATSAPP}>WhatsApp: (77) 98817-0126</L>
        </AboutMe>
      </H>
    </Container>
  </B>
)
