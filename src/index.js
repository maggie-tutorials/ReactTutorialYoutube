import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = process.env.YOUTUBE_API_KEY;

// Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    // Downwards data-flow => only the most parent component should be
    // responsible for fetching data.
    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({ videos }); // making use of ES6 function videos: videos
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
