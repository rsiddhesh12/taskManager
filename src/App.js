import React, { useState, useEffect } from 'react';
import './App.css';
import Task from './pages/task';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import persistStore from 'redux-persist/es/persistStore';
import store from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import LoginForm from './pages/login/login';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import ChildComponent from './pages/childComponent/child';
import DynamicCheckboxes from './pages/checkBox/checkBox';
import NestedCircles from './pages/nestedCircle/nestedCircle';
const persistor = persistStore(store);

const App = () => {
  // const [dataFromChild, setDataFromChild] = useState('');
  
  
  //     const handleDataFromChild = (data) => {
  //          setDataFromChild(data);
  //     };
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  return(
    <>
    {/* <Provider store={store}>
      <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginForm />} />
              <Route path="/dashboard" element={<Task />} />
            </Routes>
          </BrowserRouter>
      </PersistGate>
    </Provider> */}
                    {/* <ChildComponent onData={handleDataFromChild} />
                    <p >Data From Child: {dataFromChild}</p> */}

    {/* <DynamicCheckboxes items={items} /> */}
    <NestedCircles />
    </>
  )
};

export default App;
