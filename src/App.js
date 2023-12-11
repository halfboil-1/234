import React from 'react';

function Header() {
  return <h1>Welcome to My Website</h1>;
}

function Content() {
  return <p>This is the content of my website.</p>;
}

function App () {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}

export default App;
