import React from 'react';
import './Home.css';
import categoryItems from '../dataSource/categories';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  function redirectStory(categoryItem) {
    navigate(`./story/${categoryItem.name.toLowerCase()}`);
  }

  function renderCategoryItem() {
    return categoryItems.map((categoryItem) => (
      <div
        key={categoryItem.name}
        className="flex justify-center items-center flex-col mt-3"
        onClick={() => redirectStory(categoryItem)}
      >
        <div className="category-outer-circle flex justify-center items-center">
          <div className="category-inner-circle flex justify-center items-center">
            <i className="material-icons text-4xl">{categoryItem.iconName}</i>
          </div>
        </div>
        <div className="category-text font-bold">{categoryItem.name}</div>
      </div>
    ));
  }

  return (
    <div>
      <div className="header text-white flex justify-center items-center font-bold">
        Stories Feed
      </div>
      <div className="grid grid-cols-3">{renderCategoryItem()}</div>
    </div>
  );
}

export default Home;

