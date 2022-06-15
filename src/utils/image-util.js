import envs from '../config/envs'

class ImageUtil {
  pathname

  constructor (pathname = 'files/') {
    this.pathname = pathname
  }

  generate ({ prefix, image, width, height, fit = 'cover' }) {
    const bucket = envs.AWS.BUCKET

    const strPos = image.indexOf(this.pathname)
    const key = image.substring(strPos)
    const urlEncode = btoa(JSON.stringify({
      bucket,
      key,
      edits: {
        resize: {
          width,
          height,
          fit,
        }
      }
    }))

    return `${prefix}/${urlEncode}`
  }

  thumbnail (prefix, image) {
    return this.generate({ prefix, image, width: 260, height: 280 })
  }

  cover (prefix, image) {
    return this.generate({ prefix, image, width: 500, height: 600 })
  }

  featured (prefix, image) {
    return this.generate({ prefix, image, width: 1920, height: 450 })
  }
}

export const imageUtil = new ImageUtil()
