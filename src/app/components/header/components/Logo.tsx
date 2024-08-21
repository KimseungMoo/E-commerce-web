import Image from "next/image"
import Link from "next/link"
import LogoImg from '../../../../../public/letter-w.png'
import styled from '@emotion/styled'

const ResponsiveImage = styled(Image)`
  width: 150px;

  @media (max-width: 1024px) {
    width: 100px;
  }
`

const Logo = () => {
  return (
    <Link href={'/'}>
      <div className="cursor-default">
        <ResponsiveImage 
          src={LogoImg}
          alt='logo'
          className="cursor-pointer"
        />
      </div>
    </Link>
  )
}

export default Logo