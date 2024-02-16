/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const MailController = () => import('#controllers/mail_controller')

router.get('/', () => {
  return { wello: 'world' }
})

router.post('mail', [MailController, 'index'])
