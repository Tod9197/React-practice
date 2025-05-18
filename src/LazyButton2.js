export default function LazyButton2() {
  const showAlert = () => {
    alert("bbb");
  };

  return <button onClick={showAlert}>送信2</button>;
}
