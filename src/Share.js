import React from "react";
import poster from "./assets/dj_Khalid_poster.png";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  RedditShareButton,
  EmailShareButton,

  FacebookShareCount,
  PinterestShareCount,
  RedditShareCount,

  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  EmailIcon,
} from 'react-share';


const Sharebtns = () => {

  const shareUrl = "https://another-one-98483.web.app/";
  const title = 'Another-One';
  const media = poster;

  return (
    <div className="shareContainer">

      <div className="">
      <FacebookShareButton
        url={shareUrl}
        quote={title}
        className="">
        <FacebookIcon
          size={32}
          round />
      </FacebookShareButton>
      <FacebookShareCount
        url={shareUrl}
        className="SocialMediaShareCount">
        {count => count}
      </FacebookShareCount>
      </div>

      <div className="">
        <TwitterShareButton
          url={shareUrl}
          title={title}
          className="">
          <TwitterIcon
            size={32}
            round />
        </TwitterShareButton>
      </div>

      <div className="">
        <WhatsappShareButton
          url={shareUrl}
          title={title}
          separator=":: "
          className="">
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div>

      <div className="">
        <LinkedinShareButton
          url={shareUrl}
          windowWidth={750}
          windowHeight={600}
          className="">
          <LinkedinIcon
            size={32}
            round />
        </LinkedinShareButton>
      </div>

      <div className="">
        <PinterestShareButton
          url={shareUrl}
          media={media}
          windowWidth={1000}
          windowHeight={730}
          className="">
          <PinterestIcon size={32} round />
        </PinterestShareButton>

        <PinterestShareCount
          url={shareUrl}
          className="SocialMediaShareCount">
          {count => count}
        </PinterestShareCount>
      </div>




      <div className="">
        <RedditShareButton
          url={shareUrl}
          title={title}
          windowWidth={660}
          windowHeight={460}
          className="">
          <RedditIcon
            size={32}
            round />
        </RedditShareButton>

        <RedditShareCount
          url={shareUrl}
          className="SocialMediaShareCount">
          {count => count}
        </RedditShareCount>
      </div>

      <div className="">
        <EmailShareButton
          url={shareUrl}
          subject={title}
          body="body"
          className="">
          <EmailIcon
            size={32}
            round />
        </EmailShareButton>
      </div>

    </div>
  )
}

export default Sharebtns;
