//import World from "./World"
// import styles from "./Hello.module.css";
const Hello = () => {
  function showName(){
    console.log("이름")
  }
  function showAge(age){
    console.log(age)
  }
  function showText(text){
    console.log(text)
  }
  return (//태그가 여러개면 한 번 감싸줘야한다
    <>
      <h1>Hello</h1>
      <button onClick={showName}>Show Name</button>
      <button onClick={
        () => {
          showAge(10)
        }
      }>Show Age</button>  
      <input type="text" onChange={
        e => {
          const text = e.target.value;
          showText(text)
        }
      }></input>
    </>
  )
}

export default Hello