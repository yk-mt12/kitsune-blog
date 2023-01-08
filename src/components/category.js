/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "styled-components"

export const Category = (props) => {
  const { category } = props

  return (
    <SCategory
    sx= {{
      color: "muted",
      border: "1px solid var(--theme-ui-colors-muted)"
    }}
    >{category}</SCategory>
  )
}

const SCategory = styled.p`
  display: inline-block;
  margin: .6em .6em .6em 0;
  padding: .6em;
  line-height: 1;
  text-decoration: none;
  font-size: 16px;
  border-radius: 2em;
`