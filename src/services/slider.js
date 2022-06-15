import { Service } from './service'

class SliderService extends Service {
  async findAll () {
    return this.request({
      url: '/sliders'
    })
  }
}

export const sliderService = new SliderService()
