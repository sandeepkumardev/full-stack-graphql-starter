import React from "react";
import "./App.css";
import { Book, useGetBooksQuery } from "./api";

function App() {
  const { loading, data, error } = useGetBooksQuery();

  if (loading) return <p>loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <ul>
      {data?.books?.map((book: Book) => (
        <li key={book.title}>
          Title: {book.title}, Author: {book.author}
        </li>
      ))}
    </ul>
  );
}

export default App;
