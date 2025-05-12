import { useState } from "react";

let maxId = 0;
export default function StateTodo() {
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState([]);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleClick = () => {
    setTodo([
      ...todo,
      {
        id: ++maxId,
        title,
        created: new Date(),
        isDone: false,
      },
    ]);
  };

  return (
    <div>
      <label>やること:</label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleChangeTitle}
      />
      <button type="button" onClick={handleClick}>
        追加
      </button>
      <hr />
      <ul>
        {todo.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <span>{item.created.toLocaleString()}</span>
            <p>{item.isDone ? "完了" : "未完了"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
