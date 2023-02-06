/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "styled-components"

export const Tag = (props) => {
  const { tag } = props

  return (
    <STag
      sx={{
        variant: "variants.tagIcons",
      }}
    >{tag}</STag>
  )
}

const STag = styled.p`
position: relative;
display: inline-block;
margin: 0 .6em .6em .6em;
padding: .6em .6em .6em 1.2em;
line-height: 1;
text-decoration: none;
font-size: 16px;

&:before {
	position: absolute;
	top: 0;
	left: -1em;
	content: '';
	border-width: 1.1em 1em 1.1em 0;
	border-style: solid;
}

&:after {
	position: absolute;
	top: center;
	left: 0;
	content: '●';
}
`