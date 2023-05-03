import AddForm from './components/AddForm';
import HashTable from './components/HashTable';
import Error from './components/Error';
import HashInfoContainer from './components/HashInfoContainer';
import Navbar from './components/Navbar';
import Description from './components/Description';

function App() {


  return (
    <div className="App">
      <Navbar />
      <div className="main-panel">
        <AddForm />
        <Error />
        <HashTable />
        <HashInfoContainer />
        <Description />
      </div>
    </div>
  )
}

export default App
