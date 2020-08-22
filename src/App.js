import React from 'react';
import { RecoilRoot, atom, useRecoilState, useRecoilValue, selector } from 'recoil';
// import WhoAmI from './WhoAmI'
// import IAmMe from './IAmMe'
// import IAmBackwards from './IAmBackwards'

import './App.css';

function App() {
  return (
    <RecoilRoot>
      <WhoAmI />
      <IAmMe />
      <br />
      <IAmBackwards />
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

  return(
    <div>
      Who Am I????
      <br />
      <input type="text" value={text} onChange={onChange} />
    
    </div>
  );
}

const displayMe = selector({
  key: 'displayMe',
  get: ({get}) => {
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

function IAmMe(){
  const me = useRecoilValue(displayMe)
  return(
    <>
    {me}
    </>
  )
}
function IAmBackwards(){
  const me = useRecoilValue(backwardMe)
  return(
    <>
    {me}
    </>
  );
}