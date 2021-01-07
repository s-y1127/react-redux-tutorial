import React, { useState } from 'react';

const App = () => {
  const [text, setText] = useState('');
  const onChangeText = (event) => setText(event.target.value);
  const profiles = [
    { name: 'Taro', age: 10 },
    { name: 'Hanako', age: 5 },
    { name: 'noname' },
  ];

  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />;
      })}
      <h1>{text}</h1>
      <input type="text" value={text} onChange={onChangeText} />
    </div>
  );
};

const User = (props) => {
  const { name, age } = props;

  return (
    <div>
      HI I am {name}, {age} years old.
    </div>
  );
};

User.defaultProps = { age: 1 };

export default App;
