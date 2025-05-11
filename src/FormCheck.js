import { useState } from "react";

export default function FormCheck() {
  const [form, setForm] = useState({
    agreement: true,
  });

  const handleCheckForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const show = () => {
    console.log(`同意確認: ${form.agreement ? "同意" : "反対"}`);
  };

  return (
    <form>
      <label htmlFor="agreement">同意する</label>
      <input
        id="agreement"
        name="agreement"
        type="checkbox"
        checked={form.agreement}
        onChange={handleCheckForm}
      />
      <button type="button" onClick={show}>
        送信
      </button>
    </form>
  );
}
