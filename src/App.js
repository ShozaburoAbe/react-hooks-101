import React, {useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1 )
  }

  const decrement = () => {
    setCount(count - 1 )
  }

  // 変更前の値に基づいて値を変更する。(変更前の値を引数にとる)
  const increment2 = () => setCount(prevCount => prevCount + 1 )
  const decrement2 = () => setCount(prevCount => prevCount - 1 )

  const reset = () => setCount(0)
  const double = () => setCount(count * 2 )
  const divideBy3 = () => setCount(prevCount => {
    return prevCount % 3 === 0 ? prevCount / 3 : prevCount
    // if (prevCount % 3 === 0) {
    //   return prevCount / 3
    // } else {
    //   return prevCount
    // }
  })

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>+1</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={double}>x2</button>
        <button onClick={divideBy3}>3の倍数の時だけ3で割る</button>
      </div>
    </>
  )
}

export default App;
