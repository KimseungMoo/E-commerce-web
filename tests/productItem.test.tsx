import AddButton from "@/app/components/product_item/components/AddButton";
import { ProductType } from "@/app/components/product_list/interface";
import { render, fireEvent } from "@testing-library/react";

const dummy = {
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
}

describe("상품 상세 페이지 테스트", () => {
  test("장바구니 추가", () => {
    jest.spyOn(Object.getPrototypeOf(window.localStorage), 'setItem')
    const {getByText} = render(<AddButton item={dummy} />)
    const button = getByText(/add to cart/i)
    fireEvent.click(button)
    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      'cart', 
      JSON.stringify([dummy])
    )
  })

  test("장바구니 추가 확인", () => {
    jest.spyOn(Object.getPrototypeOf(window.localStorage), 'getItem')
    const localData = window.localStorage.getItem('cart')
    const found = JSON.parse(localData!).find(
      (e: ProductType) => e.id === dummy.id
    )
    const res = Boolean(found.id)
    expect(true).toBe(res)
    expect(window.alert)
  })
})