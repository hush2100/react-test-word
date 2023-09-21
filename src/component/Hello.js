import { useState } from "react";
import UserName from "./UserName";
const Hello = ( {age}) => {
  //console.log(props)
  const [name, setName] = useState('Mike');
  //const [age, setAge] = useState(props.age);
  const msg = age > 19 ? "성인" : "미성년자"
  return (//태그가 여러개면 한 번 감싸줘야한다
    <>
      <h2>{name}({age}) : {msg}</h2>
      <UserName name={name} />
      <button onClick={() => {
        setName(name === "Mike" ? "Jane" : "Mike")
       // setAge(age+1)
      }}>Change</button>
    </>
  )
}

export default Hello
//name은 변수, setName 은 함수