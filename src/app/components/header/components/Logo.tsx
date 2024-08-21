import Image from "next/image"
import Link from "next/link"
import LogoImg from '../../../../../public/letter-w.png'

const Logo = () => {
  return (
    <Link href={'/'}>
      <div>
        <a className="cursor-default">
          <Image 
            src={LogoImg}
            alt='logo'
            width={150}
            // height={80}
            className="cursor-pointer"
          />
        </a>
      </div>
    </Link>
  )
}

export default Logo