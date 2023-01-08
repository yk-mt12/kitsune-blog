import React from "react"
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
  <div className={'ShareSns'}>
    <div>
      <HatenaShareButton url={articleUrl} quote={articleTitle}>
        <HatenaIcon size={32} round={true} />
      </HatenaShareButton>

      <FacebookShareButton url={articleUrl}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>

      <LineShareButton url={articleUrl}>
        <LineIcon size={32} round={true} />
      </LineShareButton>

      <LinkedinShareButton url={articleUrl}>
        <LinkedinIcon title={articleTitle} size={32} round={true} />
      </LinkedinShareButton>

      <TwitterShareButton title={articleTitle} via="kitsune_yk" url={articleUrl}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
    </div>
  </div>
);
