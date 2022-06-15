import { imageUtil } from '../../utils/image-util'
import { Image as Img } from './image.styled'

export const Image = ({ url, thumbnail = false, custom, ...props }) => {

  if (custom) {
    return <Img {...props} src={imageUtil[custom](url.origin, '/' + url.filename)} alt={url.filename} />
  }

  if (thumbnail) {
    return <Img {...props} src={imageUtil.thumbnail(url.origin, '/' + url.filename)} alt={url.filename} />
  }

  return <Img {...props} src={imageUtil.cover(url.origin, '/' + url.filename)} alt={url.filename} />
}
