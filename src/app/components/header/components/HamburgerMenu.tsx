import styled from '@emotion/styled'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Categories from './Categories'
import { useCartContext } from '@/context/CartContext';

const HamburgerMenuDiv = styled.div`
  @media (min-width: 1025px) {
    display: none;
  }
`

const HamburgerMenu = () => {
  const {isOpen, setIsOpen} = useCartContext()

  const onClick = () => {
    setIsOpen(prev => !prev)
  }


  const MenuPopup = () => {
    return (
      <div className='bottom-0 left-0 right-0 z-[99] h-full justify-between bg-white p-4 pb-6 fixed flex flex-col'>
        <div className='relative flex flex-col'>
          <CloseIcon onClick={onClick} className='self-end' />
          <Categories />
        </div>
      </div>
    )
  }

  return (
    <HamburgerMenuDiv>
      <MenuIcon fontSize='large' onClick={onClick} />
      {isOpen && <MenuPopup />}
    </HamburgerMenuDiv>
  )
}

export default HamburgerMenu