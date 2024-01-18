


import React from 'react';
import { useParams } from 'react-router-dom';
import Stories from 'react-insta-stories';
import StoriesData from '../dataSource/StoriesData';

function StoriesComponent() {
  const { categoryName } = useParams();
  console.log(categoryName, StoriesData);

  function renderStories() {
    // Check if categoryName exists in StoriesData
    if (StoriesData.hasOwnProperty(categoryName)) {
      const stories = (StoriesData[categoryName] || []).map((storyItem) => ({
        content: ({ action, isPaused }) => (
          <div className="w-screen h-screen bg-cover" style={{ backgroundImage: `url(${storyItem.backgroundImageUrl})` }}>
            <div className="text-2xl text-white mt-10 font-bold flex justify-center" style={{ color: storyItem.captionColor }}>
              <span>{storyItem.caption} </span>
            </div>
          </div>
        ),
      }));

      return stories;
    } else {
      // Handle the case where categoryName doesn't exist in StoriesData
      console.error(`Category "${categoryName}" not found in StoriesData`);
      console.log('Category Name:', categoryName);

      return [];
    }
  }

  return (
    
    <div>
      
      <Stories
        loop
        stories={renderStories(categoryName)} // Updated this line
        defaultInterval={1500}
        width={472}
        height={768}
      />
    </div>
  );
}


export default StoriesComponent;






