import { NewsletterCard, NewsletterForm, NewsletterTitle } from './newsletter.styled'
import { newsletterService } from '../../services/newsletter'
import { alertService } from '../../services/alert.service'
import { Input, Submit } from '../form'
import { useForm } from '../../hooks'

export const Newsletter = () => {
  const { values, setFieldValue, resetFields } = useForm()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { code, body } = await newsletterService.save(values)
      if (code === 422) {
        alertService.warn(body.message)
      } else {
        alertService.success(body.message)
      }
    } catch (error) {
      alertService.error(error.message)
    } finally {
      resetFields()
    }
  }

  return (
    <NewsletterCard>
      <NewsletterTitle tag="h3" variant="custom">Assine nossa newsletter</NewsletterTitle>

      <p>Fique por dentro de nossas novidades</p>

      <NewsletterForm onSubmit={handleSubmit}>
        <Input
          name="name"
          text="Nome"
          placeholder="Insira seu nome"
          onChange={setFieldValue}
          required
          value={values.name}
        />
        <Input
          name="email"
          text="E-mail"
          placeholder="Insira seu e-mail"
          onChange={setFieldValue}
          type="email"
          required
          value={values.email}
        />
        <Submit text="Assinar" submittingText="Assinando"/>
      </NewsletterForm>
    </NewsletterCard>
  )
}
