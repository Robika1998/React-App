import ListItem from './ListItem';

interface Item {
  id: number;
  description: string;
  price: number;
}

interface ListProps {
  items: Item[];
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <div className='flex justify-center flex-col items-center'>
      {items.map(item => (
        <ListItem key={item.id} description={item.description} price={item.price} />
      ))}
    </div>
  );
};

export default List;
