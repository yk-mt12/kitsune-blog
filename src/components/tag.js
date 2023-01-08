/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "styled-components"

export const Tag = (props) => {
  const { tag } = props

  return (
    <STag
    sx= {{
      color: "muted",
      border: "1px solid var(--theme-ui-colors-muted)"
    }}
    >{tag}</STag>
  )
}

const STag = styled.p`
  display: inline-block;
  margin: .6em .6em .6em 0;
  padding: .6em;
  line-height: 1;
  text-decoration: none;
  font-size: 14px;
  border-radius: 2em;
`