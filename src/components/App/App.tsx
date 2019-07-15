import React from "react";

import "./App.scss";

const App: React.FC = props => (
  <div>
    <header />
    <main>{props.children}</main>
    <footer />
  </div>
);

export default App;
