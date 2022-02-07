import React from "react"
import styled from "styled-components"
import { AiOutlineFundProjectionScreen } from "react-icons/ai"
import FeatureBlock from "./FeatureBlock"

const ListWrapper = styled.div`
  display: grid;
  row-gap: 5rem;
  column-gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
  grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
`

const ListFeatures = () => {
  return (
    <ListWrapper>
      <FeatureBlock
        icon={<AiOutlineFundProjectionScreen />}
        header="Project Manager"
        description="I throw myself down among the tall grass by the stream as I lie close to the earth."
      />
      <FeatureBlock
        icon={<AiOutlineFundProjectionScreen />}
        header="Project Manager"
        description="I throw myself down among the tall grass by the stream as I lie close to the earth."
      />
      <FeatureBlock
        icon={<AiOutlineFundProjectionScreen />}
        header="Project Manager"
        description="I throw myself down among the tall grass by the stream as I lie close to the earth."
      />
      <FeatureBlock
        icon={<AiOutlineFundProjectionScreen />}
        header="Project Manager"
        description="I throw myself down among the tall grass by the stream as I lie close to the earth."
      />
      <FeatureBlock
        icon={<AiOutlineFundProjectionScreen />}
        header="Project Manager"
        description="I throw myself down among the tall grass by the stream as I lie close to the earth."
      />
      <FeatureBlock
        icon={<AiOutlineFundProjectionScreen />}
        header="Project Manager"
        description="I throw myself down among the tall grass by the stream as I lie close to the earth."
      />
    </ListWrapper>
  )
}

export default ListFeatures
