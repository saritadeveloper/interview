import { useEffect, useState } from "react";

function App() {
  //We are use functional component here
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    async function fetchData() {
      // We can also call api using axios but instead of downloading package we are using fetch
      const response = await fetch(
        "https://my-json-server.typicode.com/typicode/demo/posts",
        {
          method: "GET",
        }
      );
      const finalData = await response.json();
      setData(finalData);
    }
    fetchData();
  }, []);

  
  const addTodo = () => {
    setTodo((prevState) => prevState.concat(text));
    setText("");
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Getting Response using Fetch(Question 4)
      </h1>
      <ul style={{ listStyleType: "none" }}>
        {data &&
          data.length > 0 &&
          data.map((d) => {
            return (
              <li
                style={{
                  textAlign: "center",
                  padding: 10,
                }}
                key={d.id}
              >
                {d.title}
              </li>
            );
          })}
      </ul>
      <h1 style={{ textAlign: "center" }}>Todo List</h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button style={{ marginLeft: 50 }} onClick={addTodo}>
          Submit
        </button>
      </div>
      <ul style={{ listStyleType: "none" }}>
        {todo && todo.length > 0 ? (
          todo.map((t, i) => {
            return (
              <li
                onClick={() => console.log(t)}
                style={{
                  textAlign: "center",
                  padding: 10,
                }}
                key={i}
              >
                {t}
              </li>
            );
          })
        ) : (
          <div style={{ textAlign: "center" }}>No Todos Found</div>
        )}
      </ul>
    </div>
  );
}

export default App;
