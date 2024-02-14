import { contactMailValidator } from '#validators/mail'
import type { HttpContext } from '@adonisjs/core/http'
import mail from '@adonisjs/mail/services/main'

export default class MailController {
  async index({ request, response }: HttpContext) {
    const payload = await request.validateUsing(contactMailValidator)

    try {
      await mail.send((message) => {
        message
          .to('precogs-dev@site.fr')
          .from(payload.email)
          .subject(`${payload.firstname} ${payload.lastname} | ${payload.subject}`)
          .htmlView('emails/contact', payload)
      })

      response.status(204)
    } catch (error) {
      console.log(error)
      response.status(500).send({ error: "Impossible d'envoyer l'email" })
    }
  }
}
