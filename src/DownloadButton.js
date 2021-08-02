import React from "react";
import "./DownloadButton.css";

function DownloadButton({ type, id }) {
  return (
    <div className="download">
      <h2>Download {type === "mp3" ? "music" : "video"} file</h2>
      <iframe
        className="button-api-frame"
        src={`https:///yt-mp3s.me/${type}/${id}`}
        width="60%"
        height="100rem"
        allowtransparency="true"
        scrolling="yes"
      />
    </div>
  );
}

export default DownloadButton;
