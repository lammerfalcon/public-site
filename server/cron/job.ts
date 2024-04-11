import { defineCronHandler } from '#nuxt/cron'

export default defineCronHandler('everyMinute', () => {
  console.log('Cron job every second')
  const url = `https://api.telegram.org/bot5034858680:AAEd6MZhhhOHnhjzkj7pEzkTp_v9dnbVQNk/sendMessage?chat_id=-5034858680&text=test`
  return $fetch(url, {
    method: 'POST',
  })
})
