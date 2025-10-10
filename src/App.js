import React from 'react';
import ThemeToggleButton from './components/ThemeToggleButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Theme Changer App</h1>
        <ThemeToggleButton />
      </header>
      <main>
        <p>Welcome to the website. Click the button to change the theme!</p>
        <div className="my-component" style={{ padding: '20px', marginTop: '20px' }}>
          This is a component using theme colors.
        </div>
      </main>
    </div>
  );
}

export default App;
