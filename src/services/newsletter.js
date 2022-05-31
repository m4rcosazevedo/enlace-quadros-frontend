import { Service } from './service'

class NewsletterService extends Service {
  async save ({ name, email }) {
    return this.request({
      url: '/newsletter',
      method: 'post',
      body: {
        name, email
      }
    })
  }
}

export const newsletterService = new NewsletterService()
