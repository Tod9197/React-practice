export default function LazyButton() {
  const showAlert = () => {
    alert("送信完了");
  };

  return <button onClick={showAlert}>送信</button>;
}
