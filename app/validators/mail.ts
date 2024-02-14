import vine from '@vinejs/vine'

/**
 * Validates the contact email
 */
export const contactMailValidator = vine.compile(
  vine.object({
    firstname: vine.string().trim(),
    lastname: vine.string().trim(),
    email: vine.string().email().trim(),
    subject: vine.string().trim(),
    message: vine.string().trim().escape(),
  })
)
