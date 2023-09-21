import React from "react";
import SortableList, { SortableItem } from "react-easy-sort";
import { arrayMoveImmutable } from 'array-move';
import styles from "./styles.module.css";

import SkeletonLoader from './SkeletonLoader';

import { images } from './Photos'; // Replace with the actual path

export default function Sort() {
  const [items, setItems] = React.useState(images);

  const onSortEnd = (oldIndex, newIndex) => {
    setItems(arrayMoveImmutable(items, oldIndex, newIndex));
  };

  

  return (
    <SortableList
      onSortEnd={onSortEnd}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-lg mx-auto pt-28"
      draggedItemClassName={styles.draggable}
    >
      {items.map((item) => (
        <SortableItem key={item.id}>
          <div className="image relative">
            <img src={item.url} alt={item.tag} className="w-full h-48 border border-gray-400" />
            <div className="absolute bottom-0 right-0 bg-white bg-opacity-80 px-2 py-1 text-xs rounded">{item.tag}</div>


            
          </div>
        </SortableItem>
      ))}
    </SortableList>
  );
}
