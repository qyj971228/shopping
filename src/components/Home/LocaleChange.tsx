import { Link } from '~/utils/navigation'
export default function LocaleChange() {
  return (
    <div>
      <Link href='/' locale='en'>
        英语
      </Link>
      <Link href='/' locale='zh'>
        简体中文
      </Link>
    </div>
  )
}
