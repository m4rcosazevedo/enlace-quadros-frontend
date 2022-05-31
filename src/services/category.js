import { Service } from './service'

class CategoryService extends Service {
  async findAll () {
    return this.request({
      url: '/categories'
    })
  }
}

export const categoryService = new CategoryService()
