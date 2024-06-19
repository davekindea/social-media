import React from 'react';
import './Vidios.css'; // Import CSS file

const VideoGallery = () => {
  const videos = [
    { id: 'dQw4w9WgXcQ', title: 'Rick Astley - Never Gonna Give You Up', category: 'other' },
    { id: 'M7lc1UVf-VE', title: 'Lofi Hip Hop Radio - Beats to Relax/Study to', category: 'other' },
    // Add more videos as needed with appropriate categories
    { id: 'VIDEO_ID', title: 'VIDEO_TITLE', category: 'CATEGORY_NAME' },
  ];

  // Group videos by category
  const groupedVideos = videos.reduce((acc, video) => {
    if (!acc[video.category]) {
      acc[video.category] = [];
    }
    acc[video.category].push(video);
    return acc;
  }, {});

  return (
    <div className="video-gallery">
      <h1>Video Gallery</h1>
      <div className="videos">
        {Object.keys(groupedVideos).map((category, index) => (
          <div key={index} className={`${category}-videos`}>
            <h2>{category}</h2>
            {groupedVideos[category].map((video) => (
              <div key={video.id} className="video">
                <h3>{video.title}</h3>
                <div className="video-responsive">
                  <iframe
                    title="Embedded YouTube Video"
                    width="560" // Adjust width as needed
                    height="315" // Adjust height as needed
                    src={`https://www.youtube.com/embed/${video.id}`}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
