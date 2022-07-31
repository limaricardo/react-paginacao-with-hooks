import './App.css';
import { useEffect, useState } from 'react'
import PaginationComponent from './components/PaginationComponent';
import PaginationSelector from './components/PaginationSelector';

function App() {

  const [itens, setItens] = useState([])
  const [itensPerPage, setItensPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(0)

  const pages = Math.ceil(itens.length / itensPerPage)
  const startIndex = currentPage * itensPerPage
  const endIndex = startIndex + itensPerPage
  const currentItens = itens.slice(startIndex, endIndex)

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => data)

      setItens(result)
    }
    fetchData();
    
  }, [])

  useEffect(() => {
    setCurrentPage(0)
  }, [itensPerPage])

  return (
    <div className="App">
      <PaginationSelector setItensPerPage={setItensPerPage} itensPerPage={itensPerPage} />
      
      {currentItens.map( item => {
        return <div className='item'><span>{item.id}</span><span>{item.title}<span>{item.completed}</span></span></div>
      })}

      <PaginationComponent setCurrentPage={setCurrentPage} pages={pages} />
    </div>
  );
}

export default App;
