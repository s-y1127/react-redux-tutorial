import React, { useState } from 'react';

const App = () => {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  const onClickCounter = () => {
    setCount(count + 1);
  };

  const onChangeText = (event) => setText(event.target.value);

  return (
    <>
      <Counter count={count} onClick={onClickCounter} />
      <Text text={text} onChange={onChangeText} />
    </>
  );
};

const Counter = (props) => {
  const { count, onClick } = props;
  return (
    <>
      <p>{count}</p>
      <button onClick={onClick}>Count Up!</button>
    </>
  );
};

const Text = (props) => {
  const { text, onChange } = props;
  return (
    <>
      <p>{text}</p>
      <input value={text} onChange={onChange} />
    </>
  );
};

export default App;
