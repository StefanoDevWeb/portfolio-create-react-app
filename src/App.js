import React, { useState, useEffect } from 'react';
import Pages from './pages';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/stefanodevweb')
    .then(res => res.json())
    .then(user => {setUser(user);
    });
  }, []);
  if (!user) {
    return <div />;
  }

  return <Pages user={user} />;
}

export default App;
  