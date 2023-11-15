"use client";

import { error } from "console";
import { useEffect } from "react";

export default  function Page() {
  // await new Promise((res) => setTimeout(res, 1000));
  useEffect(() => {
    console.log("sad")
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hi surprise
    </main>
  );
}
