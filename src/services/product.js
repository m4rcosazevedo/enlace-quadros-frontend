import { Service } from './service'

const DEFAULT_PARAMS = {
  category: null, limit: 12, page: 1
}


class ProductService extends Service {
  async findAll (params = DEFAULT_PARAMS) {
    const { category, limit, page, view = false } = params

    return this.request({
      url: '/products',
      params: {
        ...(category && { category }),
        ...(limit && { limit }),
        ...(page && { page }),
        ...(view && { view })
      }
    })
  }

  async find (category, product) {
    return this.request({
      url: `/products/${category}/${product}`
    })
  }
}

export const productService = new ProductService()
