import "./EventProgation.css";

export default function EventProgation() {
  const handleParent = () => alert("#parent run...");
  const handleMy = () => alert("#my run...");
  const handleChild = (e) => {
    e.preventDefault();
    alert("#childe run...");
  };
  return (
    <>
      <div id="parent" onClickCapture={handleParent}>
        親要素
        <div id="my" onClickCapture={handleMy}>
          現在要素
          <a
            id="child"
            href="https://wings.msn.to"
            onClickCapture={handleChild}
          >
            子要素
          </a>
        </div>
      </div>
      ;
    </>
  );
}
