export default function StyledBasic() {
  return (
    <>
      <style jsx>
        {`
          .panel {
            width: 300px;
            padding: 10px;
            border: 1px solid #000;
            border-radius: 5px;
            background-color: royal-blue;
            color: white;
          }
        `}
      </style>
      <div className="panel">
        <b>Styled JSX</b>はJSX形式に...
      </div>
    </>
  );
}
