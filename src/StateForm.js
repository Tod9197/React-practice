import { useState } from "react";

export default function StateForm() {
  const [form, setForm] = useState({
    name: "山田太郎",
    age: 18,
  });

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const show = () => {
    console.log(`こんにちは、${form.name}(${form.age}歳)さん！`);
  };

  return (
    <>
      <form>
        <div>
          <label htmlFor="name">名前:</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleForm}
            value={form.name}
          ></input>
        </div>
        <div>
          <label htmlFor="age">年齢:</label>
          <input
            id="age"
            name="age"
            type="number"
            onChange={handleForm}
            value={form.age}
          ></input>
        </div>
        <div>
          <button onClick={show} type="button">
            送信
          </button>
        </div>
        <p>
          こんにちは、{form.name}({form.age}歳)さん
        </p>
      </form>
    </>
  );
}
