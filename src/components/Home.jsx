import React from 'react'
import './Home.css'
import categoryItems from "../dataSource/categories"
function Home() {
  function renderCategoryItem(){
   return categoryItems.map((categoryItem) => {
      return (
        <div>
          <div className="flex justify-center items-center flex-col mt-3"
          key={categoryItem.name}
          >
          <div className="category-outer-circle flex justify-center items-center">
        <div className="category-inner-circle flex justify-center items-center">
        <i className="material-icons text-4xl">{categoryItem.iconName}</i>
        </div>
        </div>
        <div className="category-text font-bold">{categoryItem.name}</div>
        </div>
        </div>
       );
    })
   
  }
  return (
    <div>
        <div className="header text-white flex justify-center items-center font-bold"> Stories Feed </div>
      <div className="grid grid-cols-3">{renderCategoryItem()}</div>
    </div>
    
  )
}

export default Home
