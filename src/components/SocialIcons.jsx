
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
          className="icon-hover"
          title="Facebook"
        >
          <Facebook size={28} color="#1877F2" />
        </a>
      )}

      {youtube_id && (
        <a
          href={`https://www.youtube.com/@${youtube_id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-hover"
          title="YouTube"
        >
          <Youtube size={28} color="#FF0000" />
        </a>
      )}

      {instagram_id && (
        <a
          href={`https://www.instagram.com/${instagram_id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-hover"
          title="Instagram"
        >
          <Instagram size={28} color="#E1306C" />
        </a>
      )}

      {twitter_id && (
        <a
          href={`https://x.com/${twitter_id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-hover"
          title="X (Twitter)"
        >
          <TwitterX size={28} color="white" />
        </a>
      )}
    </div>
  );
};

export default memo(SocialIcons);
