/** @jsxImportSource @emotion/react */
import { css } from "styled-components";

export default function EmotionJsx() {
  const style = css`
    width: 300px;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
    background-color: royalblue;
    color: white;
  `;

  return (
    <div css={style}>
      <b>Styled JSX</b>は、JSX形式に
    </div>
  );
}
