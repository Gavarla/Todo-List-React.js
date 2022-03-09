import React from "react";
import "./style.css";
import store from './store/store';
import {Provider} from 'react-redux'
import LikesDislikes from './LikesDislikes'
export default function App() {
  return (
    <Provider store={store}>
    <div>
      <h1>Hello StackBlitz!</h1>
      <LikesDislikes></LikesDislikes>
    </div>
    </Provider>
  );
}
