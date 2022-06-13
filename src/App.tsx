import { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Table from './components/Table';
import { store } from './store/store';

import styles from './App.module.css';

const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={styles.app}>
          <Routes>
            <Route path="/" element={<Table />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
