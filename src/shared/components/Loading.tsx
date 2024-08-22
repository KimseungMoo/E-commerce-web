"use client"

import { CssBaseline } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import styled from '@emotion/styled'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin: 10em 0;
`
const Text = styled.div`
  color: rgb(2 132 199);
`

const Loading = () => {

  return (
    <>
      <CssBaseline />
      <Wrapper>
        <CircularProgress />
        {/* <Text>Loading...</Text> */}
      </Wrapper>
    </>
  )
}

export default Loading