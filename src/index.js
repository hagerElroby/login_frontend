import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store/store";
import { Provider } from "react-redux";
import ChatProvider from "./Context/ChatProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChatProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ChatProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
