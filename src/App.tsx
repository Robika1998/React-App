import Header from "./components/Header"
import List from "./components/List/List";

const dummyData = [
  { id: 1, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, iusto. In voluptates totam pariatur numquam nesciunt quia ratione voluptatem quae dolorum sunt veritatis quidem eius beatae, dolore culpa, doloremque repellendus.', price: 10.99 },
  { id: 2, description: 'Description for Item 2Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, iusto. In voluptates totam pariatur numquam nesciunt quia ratione voluptatem quae dolorum sunt veritatis quidem eius beatae, dolore culpa, doloremque repellendus.', price: 20.99 },
  { id: 3, description: 'Description for Item 3Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, iusto. In voluptates totam pariatur numquam nesciunt quia ratione voluptatem quae dolorum sunt veritatis quidem eius beatae, dolore culpa, doloremque repellendus.', price: 15.99 },
];


function App() {
  
  return (
    <>
    <Header/>
      <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4 flex justify-center">Information's List</h1>
      <List items={dummyData} />
    </div>
    </>
    
  )
}

export default App
