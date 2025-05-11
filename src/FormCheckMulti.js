import { useState } from "react";

export default function FormCheckMulti() {
  const [form, setForm] = useState({
    animal: ["dog", "hamster"],
  });

  const handleFormMulti = (e) => {
    const fa = form.animal;
    if (e.target.checked) {
      fa.push(e.target.value);
    } else {
      fa.splice(fa.indexOf(e.target.value), 1);
    }

    setForm({
      ...form,
      [e.target.name]: fa,
    });
  };

  const show = () => {
    console.log(`好きな動物: ${form.animal}`);
  };

  return (
    <form>
      <fieldset>
        <legend>好きな動物:</legend>
        <label htmlFor="animal_dog">犬</label>
        <input
          id="animal_dog"
          name="animal"
          type="checkbox"
          value="dog"
          checked={form.animal.includes("dog")}
          onChange={handleFormMulti}
        />
        <label htmlFor="animal_cat">猫</label>
        <input
          id="animal_cat"
          name="animal"
          type="checkbox"
          value="cat"
          checked={form.animal.includes("cat")}
          onChange={handleFormMulti}
        />
        <label htmlFor="animal_hamster">ハムスター</label>
        <input
          id="animal_hamster"
          name="animal"
          type="checkbox"
          value="hamster"
          checked={form.animal.includes("hamster")}
          onChange={handleFormMulti}
        />
        <label htmlFor="animal_rabbit">うさぎ</label>
        <input
          id="animal_rabbit"
          name="animal"
          type="checkbox"
          value="rabbit"
          checked={form.animal.includes("rabbit")}
          onChange={handleFormMulti}
        />
        <button type="button" onClick={show}>
          送信
        </button>
      </fieldset>
    </form>
  );
}
