'use client'

import { setLocales } from '~/cookie'

export default function LocaleChange() {
  return (
    <ul>
      <li>
        <button
          onClick={() => {
            setLocales('en')
            window.location.href = window.location.href.replace('/zh', '/en')
          }}
        >
          en
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setLocales('zh')
            window.location.href = window.location.href.replace('/en', '/zh')
          }}
        >
          zh
        </button>
      </li>
    </ul>
  )
}
