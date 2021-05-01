import { waitForElementToBeRemoved } from '@testing-library/dom';
import React from 'react';

function App() {
  return (
    <div className="grid-container">
      <header>
        <a href=""> REACT Shopping Cart </a>
      </header>
      <main>
        Product List
      </main>
      <footer>
        all right is reserved.
      </footer>
    </div>
  );
}

export default App;
