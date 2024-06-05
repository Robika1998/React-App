import React from "react";
import ListItem from './ListItem';

interface Item {
  id: number;
  web_site: string;
  title: string;
  text: string;
  image?: string;
  date: string;
  createdAt: number;
}

interface ListProps {
  items: Item[];
  onAddNote: (note: string) => void;
}

const List: React.FC<ListProps> = ({ items, onAddNote }) => {
  return (
    <div className='flex justify-center flex-col items-center '>
      {items.map(item => (
        <ListItem
        key={item.id}
          id={item.id}
          web_site={item.web_site}
          title={item.title}
          text={item.text}
          image={item.image}
          date={item.date}
          createdAt={item.createdAt}
          onAddNote={onAddNote}
        />
      ))}
    </div>
  );
};

export default List;

