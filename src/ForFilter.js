import React from "react";

export default function ForFilter({ src }) {
  const highPrice = src.filter((book) => book.price > 4000);
  return (
    <dl>
      {highPrice.map((elem) => (
        <React.Fragment key={elem.isbn}>
          <dt>
            <a
              href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}
            >
              {elem.title}({elem.price}円)
            </a>
          </dt>
          <dd>{elem.summary}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
