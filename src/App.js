import React, { useState, useEffect } from "react";
import "../src/App.css";
import DownloadButton from "./DownloadButton";

export default function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    const id = videoUrl.replace("https://www.youtube.com/watch?v=", "");
    setId(id);
  }, [videoUrl]);

  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
      </div>
      <div>
        <div className="App">
          <h1>DOWNLOADit</h1>
          <p>Just paste URL link and click on download</p>

          <div>
            <form
              style={{ padding: "1rem 0rem" }}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                onChange={(e) => setVideoUrl(e.target.value)}
                type="text"
                className="URL_form"
                placeholder="Paste URL here"
              />
            </form>
          </div>

          <div>
            <DownloadButton id={id} type="mp3" />
            <DownloadButton id={id} type="mp4" />
          </div>

          <div
            className="copyright"
            style={{ padding: "1rem 0rem", fontSize: "15px" }}
          >
            <p>
              All rights reserved 2021
              <br />
              Contact: ibilalchaudhary@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
