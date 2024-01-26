import './App.css';
import Folder from './components/Folder';
import explorer from './FolderData/FolderData';

function App() {
  return (
    <div style={{width:"20%"}}>
     <Folder explorer={explorer}/>
    </div>
  );
}

export default App;
