import React, { Component } from "react";
import MediaList from "./mediaList";
import { getMediaFiles } from "./mediaService";

class MediaWall extends Component {
  constructor(props) {
    super(props);
    this.media = getMediaFiles().map((file) => `${this.path}${file}`);
  }

  path = "assets/images/sud/";

  render() {
    return (
      <div>
        <section className="wall_section">
          <MediaList mediaFiles={this.media} />
        </section>
      </div>
    );
  }
}

export default MediaWall;
