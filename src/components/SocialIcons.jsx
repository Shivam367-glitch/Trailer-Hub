
import {memo} from "react";
import { Facebook, Instagram, TwitterX, Youtube } from "react-bootstrap-icons";
const SocialIcons = ({ facebook_id, youtube_id, instagram_id, twitter_id }) => {
  return (
    <div className="d-flex gap-4 flex-wrap">
      {facebook_id && (
        <a
          href={`https://www.facebook.com/${facebook_id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-hover mb-2"
          title="Facebook"
        >
          <Facebook size={30} color="#1877F2" />
        </a>
      )}

      {youtube_id && (
        <a
          href={`https://www.youtube.com/@${youtube_id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-hover mb-2"
          title="YouTube"
        >
          <Youtube size={30} color="#FF0000" />
        </a>
      )}

      {instagram_id && (
        <a
          href={`https://www.instagram.com/${instagram_id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-hover mb-2"
          title="Instagram"
        >
          <Instagram size={30} color="#E1306C" />
        </a>
      )}

      {twitter_id && (
        <a
          href={`https://x.com/${twitter_id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-hover mb-2"
          title="X (Twitter)"
        >
          <TwitterX size={30} color="white" />
        </a>
      )}
    </div>
  );
};

export default memo(SocialIcons);
