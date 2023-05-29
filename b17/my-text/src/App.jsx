import React from "react";
import { Provider } from "react-redux";
import BookList from "./component/BookList";
import BookForm from "./component/BookForm";

import store from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <div
        style={{
          height: "400px",
          width: "400px",
          paddingTop: "20px",
          paddingLeft: "20px",
        }}
      >
        <BookForm />
        <BookList />
      </div>
    </Provider>
  );
};

export default App;
