import React, { Suspense, useState } from "react";
import SortableList, { SortableItem } from "react-easy-sort";
import { arrayMoveImmutable } from 'array-move';
import styles from "./styles.module.css";

import { Signout } from "../components/logout";

import { images } from './Photos'; // Replace with the actual path


export default function Sort() {
  const [items, setItems] = React.useState(images);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, isLoading] = useState(true)

  
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredItems = images.filter((item) => item.tag.toLowerCase().includes(query));
    setItems(filteredItems);
  };

  const onSortEnd = (oldIndex, newIndex) => {
    setItems(arrayMoveImmutable(items, oldIndex, newIndex));
  };

  

  return (
    <div>

      <div className="flex flex-col lg:flex-row gap-5 justify-between items-center ">
      <div className="flex gap-0 flex-row items-center lg:ml-28 lg:mt-18 mt-9">
       <input
        type="text"
        placeholder="Search for image by tag"
        value={searchQuery}
        onChange={handleSearch}
        className="bg-gray-200 w-60 lg:w-80 appearance-none border-2 border-gray-200 rounded-xl py-3 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-200"
       />

       <button className="bg-indigo-500 text-white  py-3 px-4 rounded-xl"
       onClick={handleSearch}
       value={searchQuery}>
        <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M25.3582 23.7927L29.6888 28.1211C29.8907 28.3302 30.0025 28.6102 30 28.9009C29.9974 29.1916 29.8808 29.4697 29.6753 29.6753C29.4697 29.8808 29.1916 29.9974 28.9009 30C28.6102 30.0025 28.3302 29.8907 28.1211 29.6888L23.7905 25.3582C20.9606 27.7828 17.3016 29.0171 13.5813 28.802C9.86094 28.587 6.36851 26.9393 3.83681 24.2048C1.30512 21.4703 -0.0690472 17.8615 0.00267253 14.1356C0.0743922 10.4098 1.58642 6.85653 4.22148 4.22148C6.85653 1.58642 10.4098 0.0743922 14.1356 0.00267253C17.8615 -0.0690472 21.4703 1.30512 24.2048 3.83681C26.9393 6.36851 28.587 9.86094 28.802 13.5813C29.0171 17.3016 27.7828 20.9606 25.3582 23.7905V23.7927ZM14.4132 26.6088C17.6477 26.6088 20.7497 25.3239 23.0368 23.0368C25.3239 20.7497 26.6088 17.6477 26.6088 14.4132C26.6088 11.1787 25.3239 8.07671 23.0368 5.78958C20.7497 3.50246 17.6477 2.21757 14.4132 2.21757C11.1787 2.21757 8.07671 3.50246 5.78958 5.78958C3.50246 8.07671 2.21757 11.1787 2.21757 14.4132C2.21757 17.6477 3.50246 20.7497 5.78958 23.0368C8.07671 25.3239 11.1787 26.6088 14.4132 26.6088Z" fill="white"/>
       </svg></button>
       </div>
       <Signout />
      
      </div>

      
    <SortableList
      onSortEnd={onSortEnd}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-lg mx-auto pt-14"
      draggedItemClassName={styles.draggable}
    >
      {items.map((item) => (
        <SortableItem key={item.id}>
         
          <div className="image relative">
            <img src={item.url} alt={item.tag} className="w-full rounded-md h-48 border border-gray-400"  />
            <div className="absolute bottom-0 right-0 bg-pink bg-opacity-80 px-2 py-1 text-xs rounded">{item.tag}</div> 
          </div>
      
        </SortableItem>
      )) }
    </SortableList>
  
    </div>
  );
}
