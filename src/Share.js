import React from "react";
import poster from "./assets/dj_Khalid_poster.png";
import Svg from "./Icon";
import {
  //share buttons
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  RedditShareButton,
  EmailShareButton,
  //share count
  FacebookShareCount,
  PinterestShareCount,
  RedditShareCount,
  //icon
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  EmailIcon,
} from 'react-share';


class Sharebtns extends React.Component {
    constructor (props) {
      super(props);
      this.shareUrl = "https://another-one-98483.web.app/";
      this.title = 'Another-One';
      this.media = poster;
      this.state = {
        hasError: false
      };
    }

    static getDerivedStateFromError(error) {
      return { hasError: true };
    }

    componentDidCatch(error, info) {
      //called during commit phase, used for error logging
    }

    componentDidMount() {
      //can set state here
    }

    componentWillUnmount() {
      //invoked immediately before a component is unmounted and destroyed.
      //Perform any necessary cleanup in this method, such as invalidating
      //timers, canceling network requests, or cleaning up any subscriptions.
    }

    collapseSocialShareButtons () {

      const socialShareButtonsCont = document.getElementById('socialShareButtonsContainer');

      if (socialShareButtonsCont.style.visibility === "collapse") {
        socialShareButtonsCont.style.visibility = "visible";
      }else {
        socialShareButtonsCont.style.visibility = "collapse"
        socialShareButtonsCont.style.flexDirection = "column";
      }


    }

    render () {
      return (
      <div className="shareContainer">

        <div className="shareBtnCont">
          <Svg onClickFunction={this.collapseSocialShareButtons} />
        </div>

        <div className="socialShareButtonsContainer" id="socialShareButtonsContainer" >
          <div className="">
            <FacebookShareButton
              url={this.shareUrl}
              quote={this.title}
              className="">
            <FacebookIcon
              size={32}
              round />
            </FacebookShareButton>
            <FacebookShareCount
              url={this.shareUrl}
              className="SocialMediaShareCount">
              {count => count}
            </FacebookShareCount>
          </div>

          <div className="">
            <TwitterShareButton
              url={this.shareUrl}
              title={this.title}
              className="">
              <TwitterIcon
                size={32}
                round />
              </TwitterShareButton>
          </div>

          <div className="">
            <WhatsappShareButton
              url={this.shareUrl}
              title={this.title}
              separator=":: "
              className="">
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>

          <div className="">
            <LinkedinShareButton
              url={this.shareUrl}
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
              url={this.shareUrl}
              media={this.media}
              windowWidth={1000}
              windowHeight={730}
              className="">
              <PinterestIcon size={32} round />
            </PinterestShareButton>

            <PinterestShareCount
              url={this.shareUrl}
              className="SocialMediaShareCount">
              {count => count}
            </PinterestShareCount>
          </div>

          <div className="">
            <RedditShareButton
              url={this.shareUrl}
              title={this.title}
              windowWidth={660}
              windowHeight={460}
              className="">
            <RedditIcon
              size={32}
              round />
            </RedditShareButton>

            <RedditShareCount
              url={this.shareUrl}
              className="SocialMediaShareCount">
              {count => count}
            </RedditShareCount>
          </div>

          <div className="">
            <EmailShareButton
              url={this.shareUrl}
              subject={this.title}
              body="body"
              className="">
              <EmailIcon
              size={32}
              round />
            </EmailShareButton>
          </div>
        </div>
      </div>
  );
}
}







export default Sharebtns;
