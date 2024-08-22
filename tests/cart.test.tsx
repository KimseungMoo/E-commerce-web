import { render, fireEvent, cleanup, screen, act } from "@testing-library/react";
import Cart from '@/app/cart/page'
import mockRouter from 'next-router-mock';

const dummy = [
  {
      "id": 1,
      "title": "Solid Gold Petite Micropave ",
      "price": 168,
      "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      "category": "jewelery",
      "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
          "rate": 3.9,
          "count": 70
      },
      "isChecked": false
  },
  {
      "id": 2,
      "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      "price": 109,
      "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
      "category": "electronics",
      "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      "rating": {
          "rate": 4.8,
          "count": 319
      },
      "isChecked": false
  },
  {
      "id": 3,
      "title": "White Gold Plated Princess",
      "price": 9.99,
      "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      "category": "jewelery",
      "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
          "rate": 3,
          "count": 400
      },
      "isChecked": false
  },
  {
      "id": 4,
      "title": "Mens Cotton Jacket",
      "price": 55.99,
      "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "rating": {
          "rate": 4.7,
          "count": 500
      },
      "isChecked": false
  }
]

describe('장바구니 페이지 테스트', () => {
  afterEach(cleanup)

  const setup = () => {
    const {getByLabelText, getAllByTestId, getByTestId} = render (
      <Cart />
    )
    const allSelectedCheckbox = getByLabelText('select-all-checkbox')
    const selectedItemButton = getByTestId('cart-selected-remove-btn') // 선택된 아이템 삭제 버튼
    const cartRow = getAllByTestId('cart-row')
    const removeButton = getAllByTestId('remove-button') // 아이템별 삭제 버튼

    return {
      allSelectedCheckbox,
      selectedItemButton,
      cartRow,
      removeButton
    }
  }
  test('전체 선택 체크박스 클릭 후 삭제', async () => {
    jest.spyOn(Object.getPrototypeOf(window.localStorage), 'setItem')
    window.localStorage.setItem('cart', JSON.stringify(dummy))
    const {allSelectedCheckbox, selectedItemButton} = setup()
    await act(async () => {
      fireEvent.click(allSelectedCheckbox) // 전체 선택 체크박스 클릭
    })
    expect(allSelectedCheckbox).toBeChecked() // 전체 선택 체크박스 클릭 확인
    await act(async () => {
      fireEvent.click(selectedItemButton) // 삭제 버튼 클릭
    })
    const cartCount = screen.getByTestId('cart-count')
    expect(cartCount).toHaveTextContent('Product (0)')
  })

  test('체크박스 테스트(단일 선택, 다중 선택)', async () => {
    jest.spyOn(Object.getPrototypeOf(window.localStorage), 'setItem')
    window.localStorage.setItem('cart', JSON.stringify(dummy)) // 아이템 4개 mocking
    const {cartRow, removeButton, selectedItemButton} = setup()
    await act(async () => {
      fireEvent.click(removeButton[0]) // 첫번째 아이템 삭제
    })
    
    const restCartRow = screen.getAllByTestId('cart-row')
    expect(restCartRow.length).toBe(3)
    expect(cartRow[0]).not.toBeInTheDocument() // 첫번째 아이템 삭제 확인

    const row = screen.getByLabelText('table-row-checkbox-4') // 마지막 아이템 (id=4)
    await act(async () => {
      fireEvent.click(row) // 마지막 아이템 선택
    })
    expect(row).toBeChecked() // 마지막 아이템 선택 확인
    await act(async () => {
      fireEvent.click(selectedItemButton) // 선택된 아이템 삭제
    })
    const restCartRow2 = screen.getAllByTestId('cart-row')
    expect(restCartRow2.length).toBe(2)
  })
})