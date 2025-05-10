import { useState } from "react";

export default function FormList() {
  const [form, setForm] = useState({
    animal: ["dog", "hamster"],
  });

  const handleFormList = (e) => {
    const data = [];

    const opts = e.target.options;
    for (const opt of opts) {
      if (opt.selected) {
        data.push(opt.value);
      }
    }

    setForm({
      ...form,
      [e.target.name]: data,
    });
  };

  const show = () => {
    console.log(`好きな動物:${form.animal}`);
  };

  return (
    <form>
      <label htmlFor="animal">好きな動物:</label>
      <br />
      <select
        id="animal"
        name="animal"
        value={form.animal}
        multiple={true}
        size="4"
        onChange={handleFormList}
      >
        <option value="dog">犬</option>
        <option value="cat">猫</option>
        <option value="hamster">ハムスター</option>
        <option value="rabbit">うさぎ</option>
      </select>
      <button type="button" onClick={show}>
        送信
      </button>
    </form>
  );
}
