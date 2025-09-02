import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Page() {
  const headersList = headers() // Note: headers() is actually synchronous, see below
  const acceptLanguage = ((await headersList).get('accept-language') || '').toLowerCase()

  if (acceptLanguage.startsWith('it')) {
    redirect('/it')
  } else {
    redirect('/en')
  }
}
