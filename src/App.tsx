import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import List from "./components/List/List";
import { DefaultPagination } from './components/Pagination/Pagination';
import SimpleFooter from './components/Footer';
import classNames from 'classnames';

const dummyData = [
  { id: 1, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, iusto. In voluptates totam pariatur numquam nesciunt quia ratione voluptatem quae dolorum sunt veritatis quidem eius beatae, dolore culpa, doloremque repellendus.', price: 10.99 },
  { id: 2, description: 'Description for Item 2Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, iusto. In voluptates totam pariatur numquam nesciunt quia ratione voluptatem quae dolorum sunt veritatis quidem eius beatae, dolore culpa, doloremque repellendus.', price: 20.99 },
  { id: 3, description: 'Description for Item 3Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, iusto. In voluptates totam pariatur numquam nesciunt quia ratione voluptatem quae dolorum sunt veritatis quidem eius beatae, dolore culpa, doloremque repellendus.', price: 4659 },
  { id: 4, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, iusto. In voluptates totam pariatur numquam nesciunt quia ratione voluptatem quae dolorum sunt veritatis quidem eius beatae, dolore culpa, doloremque repellendus.', price: 10.99 },
  { id: 5, description: 'Description for Item 2Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, iusto. In voluptates totam pariatur numquam nesciunt quia ratione voluptatem quae dolorum sunt veritatis quidem eius beatae, dolore culpa, doloremque repellendus.', price: 275 },
  { id: 6, description: 'Description for Item 3Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, iusto. In voluptates totam pariatur numquam nesciunt quia ratione voluptatem quae dolorum sunt veritatis quidem eius beatae, dolore culpa, doloremque repellendus.', price: 42 },
  { id: 9, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, iusto. In voluptates totam pariatur numquam nesciunt quia ratione voluptatem quae dolorum sunt veritatis quidem eius beatae, dolore culpa, doloremque repellendus.', price: 10.99 },
  { id: 56, description: 'Description for Item 2Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, iusto. In voluptates totam pariatur numquam nesciunt quia ratione voluptatem quae dolorum sunt veritatis quidem eius beatae, dolore culpa, doloremque repellendus.', price: 7567 },
  { id: 88, description: 'Description for Item 3Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, iusto. In voluptates totam pariatur numquam nesciunt quia ratione voluptatem quae dolorum sunt veritatis quidem eius beatae, dolore culpa, doloremque repellendus.', price: 35435 },
];

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [transitionDirection, setTransitionDirection] = useState('');
  const itemsPerPage = 3;
  const totalPages = Math.ceil(dummyData.length / itemsPerPage);

  useEffect(() => {
    if (transitionDirection !== '') {
      const timer = setTimeout(() => {
        setTransitionDirection('');
      }, 30); 

      return () => clearTimeout(timer);
    }
  }, [transitionDirection]);

  const handlePageChange = (page: number) => {
    if (page > currentPage) {
      setTransitionDirection('left');
    } else if (page < currentPage) {
      setTransitionDirection('right');
    }

    setTimeout(() => {
      setCurrentPage(page);
    }, 30); 
  };

  const currentItems = dummyData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <Header navigation={[]} />
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-4 flex justify-center">Information's List</h1>
        <div className="overflow-hidden relative">
          <div
            className={classNames(
              "transition-transform duration-300",
              transitionDirection === 'right' ? 'translate-x-full' : '',
              transitionDirection === 'left' ? '-translate-x-full' : ''
            )}
          >
            <List items={currentItems} />
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <DefaultPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      <SimpleFooter />
    </>
  );
}

export default App;

