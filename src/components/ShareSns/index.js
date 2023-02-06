import React from "react"
import styled from 'styled-components'
import {
  TwitterIcon,
  TwitterShareButton,
  LineShareButton,
  LineIcon,
  HatenaShareButton,
  HatenaIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share"


export const ShareSns = ({ articleUrl, articleTitle }) => (
  <SBlock>
    <SButton>
      <HatenaShareButton url={articleUrl} title={articleTitle}>
        <HatenaIcon size={40} round={true} />
      </HatenaShareButton>
    </SButton>
    <SButton>

      <FacebookShareButton url={articleUrl} title={articleTitle}>
        <FacebookIcon size={40} round={true} />
      </FacebookShareButton>
    </SButton>
    <SButton>
      <LineShareButton url={articleUrl} title={articleTitle}>
        <LineIcon size={40} round={true} />
      </LineShareButton>
    </SButton>
    <SButton>
      <LinkedinShareButton url={articleUrl} tit={articleTitle}>
        <LinkedinIcon title={articleTitle} size={40} round={true} />
      </LinkedinShareButton>
    </SButton>
    <SButton>
      <TwitterShareButton title={articleTitle} via="kitsune_yk" url={articleUrl}>
        <TwitterIcon size={40} round={true} />
      </TwitterShareButton>
    </SButton>
  </SBlock>
);


const SBlock = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
`

const SButton = styled.div`
  margin: 8px;
`