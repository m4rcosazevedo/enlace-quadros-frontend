import { imageUtil } from '../../utils/image-util'

export const Image = ({ url, thumbnail = false }) => {
  if (thumbnail) {
    return <img src={imageUtil.thumbnail(url.origin, '/' + url.filename)} alt={url.filename} />
  }

  return <img src={imageUtil.cover(url.origin, '/' + url.filename)} alt={url.filename} />
}
