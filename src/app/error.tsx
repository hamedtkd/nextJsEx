"use client";
import { Button } from "@flexui-io/flexui-components";
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
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}

export default Error;
