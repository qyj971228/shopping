'use server'

import { cookies } from 'next/headers'
import { Locales } from '~/middleware'

const names = {
  locales: 'locales',
}

/**
 * locales
 */
export async function setLocales(data: Locales) {
  cookies().set(names.locales, data)
}
export async function getLocales() {
  return cookies().get(names.locales)
}
