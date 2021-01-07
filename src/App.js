import React, { useState } from 'react';

const App = () => {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    setCount(count + 1);
  };
  const onClickCountDown = () => {
    setCount(count - 1);
  };

  const onChangeText = (event) => setText(event.target.value);

  return (
    <>
      <Counter
        count={count}
        onClickCountUp={onClickCountUp}
        onClickCountDown={onClickCountDown}
      />
      <Text text={text} onChange={onChangeText} />
    </>
  );
};

const Counter = (props) => {
  const { count, onClickCountUp, onClickCountDown } = props;
  return (
    <>
      <p>{count}</p>
      <br />
      <button onClick={onClickCountUp}>Count Up!</button>
      <button onClick={onClickCountDown}>Count Down!</button>
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
