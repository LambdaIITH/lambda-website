/** @jsxImportSource react */
import {useState} from 'react'

const Number = () => {
  const [num,setNum] = useState<number>(0);
  return (
    <div>
      <h1>This is {num}</h1>
      <button onClick={()=>setNum(num+1)}>click me</button>
    </div>
  )
}

export default Number