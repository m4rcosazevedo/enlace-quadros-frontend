import * as S from './banner-whatsapp.styled'
import { withRouter } from 'next/router'
import envs from '../../../config/envs'
import {Icon} from "../../icon/icon";

export const BannerWhatsapp = withRouter(({ router }) => {
  const url = envs.URL_ORIGIN +  router.asPath

  return (
    <S.Background>
      <S.Link>
        <Icon icon="whatsapp" />
        <S.Title>Converse conosco</S.Title>
      </S.Link>
    </S.Background>
  )
})
