import { FC } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Table from './components/Table';
import { store } from './store/store';

const App: FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Table />
      </div>
    </Provider>
  );
}

export default App;
