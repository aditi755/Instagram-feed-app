import React from 'react'
import { useParams } from "react-router-dom";
import  Stories  from 'react-insta-stories'; // Import the Stories component
import StoriesData from '../dataSource/StoriesData'

function StoriesComponent() {
  let match = useParams();
function renderStories(){
  console.log(match)
  const categoryName = match.params.categoryName;
  const stories = StoriesData.map((storyItem) => {
    return {
      content: ({action, isPaused}) => {
        return (
          <div className="w-screen h-screen bg-cover" style={{backgroundImage: `url(${storyItem.backgroundImageUrl})`}}>
            <div className="text-2xl text-white mt-5 font-bold flex justify-center">
              <span>{storyItem.caption} 😋</span>
              </div>
          </div>
        )
      }
    }
    
});
return stories;
}
  return (
    <div>
      <Stories loop stories={renderStories}/>
      </div>
  )
}

export default StoriesComponent




