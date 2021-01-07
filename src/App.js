import React, { useState } from 'react';

const App = () => {
  const [text, setText] = useState('');
  const onChangeText = (event) => setText(event.target.value);

  return (
    <div>
      <h1>{text}</h1>
      <input type="text" value={text} onChange={onChangeText} />
    </div>
  );
};

export default App;
