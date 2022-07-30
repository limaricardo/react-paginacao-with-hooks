import './App.css';
import { useEffect, useState } from 'react'

function App() {

  const [itens, setItens] = useState([])
  const [itensPerPage, setItensperPage] = useState(10)
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
      <div>
        <select value={itensPerPage} onChange={e => setItensperPage(Number(e.target.value))}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={25}>25</option>
        </select>
      </div>
      <div>
        {Array.from(Array(pages), (item, index) => {
          return <button value={index} onClick={e => setCurrentPage(Number(e.target.value))}>{index + 1}</button>
        })}
      </div>
      {currentItens.map( item => {
        return <div className='item'><span>{item.id}</span><span>{item.title}<span>{item.completed}</span></span></div>
      })}
    </div>
  );
}

export default App;
