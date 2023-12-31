"use client";

import { error } from "console";

type ErrorPageProps = {
  error: Error;
  reset: () => void;
};

function Error({ error, reset }: ErrorPageProps) {
  return (
    <div>
      <h1>Error!</h1>
      <p>Something went wrong</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}

export default Error;
