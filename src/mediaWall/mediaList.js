import React from "react";

const MediaList = ({ mediaFiles }) => (
  <ul className="media-list">
    {mediaFiles.map((file, index) => (
      <li key={index}>
        <img src={file} alt="index" />
      </li>
    ))}
  </ul>
);

export default MediaList;
