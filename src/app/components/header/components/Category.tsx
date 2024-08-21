import { useSearchContext } from "@/context/SearchContext";
import { ChildrenProps } from "@/shared/interface";
import Link from "next/link";
import { useEffect, useState } from "react";

const Category = ({children}: ChildrenProps) => {
  return (
    <nav>
      <ul>{children}</ul>
    </nav>
  )
}

interface Props extends ChildrenProps {
  category: string | undefined
}

const Item = ({children, category}: Props) => {
  const {category: _category} = useSearchContext()
  const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    setIsSelected(category === _category)
  }, [category, _category])

  const selectedClassName = isSelected ? 'bg-blue-400' : ''
  const selectedTextClassName = isSelected ? 'text-white' : ''

  return (
    <li className="list-none">
      <Link href={`/?category=${category}`}
      >
        <div className={`p-2 hover:bg-blue-50 rounded-md ${selectedClassName}`}>
          <span className={`font-roboto text-black ${selectedTextClassName}`}>{children}</span>
        </div>
      </Link>
    </li>
  )
}

Category.Item = Item

export default Category