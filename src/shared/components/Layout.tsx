"use client"

import { ChildrenProps } from "../interface";
import {css} from "@emotion/react" 
import styled from '@emotion/styled'

const layout_css = {
  container: css({
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
  }),
  item: css({
    width: '100%',
  })
}

const LayoutWrapper = styled.div`
  width: 100%;
  flex-direction: column;
  align-items: center;
  align-content: center;
`
const LayoutItem = styled.div`
  width: 100%;
  // height: 100%;
  // background: white;
`

const Layout = ({children}: ChildrenProps) => {
  return (
    <LayoutWrapper>
      <LayoutItem>
        {children}
      </LayoutItem>
    </LayoutWrapper>
  )
}

export default Layout