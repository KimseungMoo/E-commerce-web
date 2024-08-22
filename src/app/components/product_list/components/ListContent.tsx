import List from "./List"
import { useProductList } from "../remotes"
import { ProductType } from "../interface"
import ListItem from "./ListItem"
import Loading from "@/shared/components/Loading"

const ListContent = () => {
  const {data} = useProductList()
  // console.log(data)

  return (
    <List>
      {data?.length ? (
        <List.Content>
          {data?.map((item: ProductType) => <ListItem key={item?.id} value={item} />)}
        </List.Content>
      ) : (
        <Loading />
      )}
    </List>
  )
}

export default ListContent