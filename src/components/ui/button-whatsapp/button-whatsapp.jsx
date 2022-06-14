import { ExternalLink } from '../../external-link/external-link'
import { withRouter } from 'next/router'
import envs from '../../../config/envs'
import { Icon } from '../../icon/icon'
import styled from 'styled-components'

const Btn = styled(ExternalLink)`
  display: inline-flex;
  font-size: 1rem;
  padding: 5px 10px;
  align-items: center;
  border-radius: 4px;
  background: #13ab4e;

  &, &:hover {
    color: #fff;
    text-decoration: none;
  }

  &:hover {
    background-color: #25D366;
  }

  svg {
    margin-right: 10px;
    width: 25px;
  }
`

export const ButtonWhatsapp = withRouter(({ router }) => {
  const url = envs.URL_ORIGIN +  router.asPath

  return (
    <Btn href={`${envs.SOCIAL.WHATSAPP}?text=Olá, estou interessado no produto: ${url}`}>
      <Icon icon="whatsapp" /> Converse conosco
    </Btn>
  )
})
