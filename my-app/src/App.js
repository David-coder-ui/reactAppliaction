import './App.css';
import CenteredTabs from '../src/components/tabs';
import BasicTable from '../src/components/table';

function App() {
  return (
     <div className="container-fluid">
  <div className="row">
    <div className="col-sm-4">
      <CenteredTabs/>
      <BasicTable />
    </div>
    <div className="col-sm-4">
      <h3>Column 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div className="col-sm-4">
      <h3>Column 3</h3>        
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
  </div>
</div>

  
  );
}

export default App;
