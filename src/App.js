import React from 'react';
import { RecoilRoot, atom, useRecoilState, useRecoilValue, selector } from 'recoil';
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <div className="panels">
      <IAmMe />
      <WhoAmI />
      <IAmBackwards />
      </div>
    </RecoilRoot>
  );
}

export default App;

const textState = atom({
  key: 'textState',
  default: '',
});

function WhoAmI() {
  const [text, setText] = useRecoilState(textState);
  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="panel">
      Who Am I????
      <br />
      <input type="text" value={text} onChange={onChange} />
      <br/>
      <br />

      {text}
    </div>
  );
}

const displayMe = selector({
  key: 'displayMe',
  get: ({ get }) => {
    const me = get(textState)
    return me.toUpperCase()
  }
})

const backwardMe = selector({
  key: 'backwardMe',
  get: ({ get }) => {
    const me = get(textState)
    return me.split('').reverse().join("")
  }
})

function IAmMe() {
  const me = useRecoilValue(displayMe)
  return (
    <div className="panel">
      <br />
      <br />
      <br />
      <br />
      <br />

      {me}
    </div>
  )
}
function IAmBackwards() {
  const me = useRecoilValue(backwardMe)
  return (
    <div className="panel">
      <br />
      <br />
      <br />
      <br />
      <br />

      {me}
    </div>
  );
}