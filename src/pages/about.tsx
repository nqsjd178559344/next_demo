import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    throw new Error("报错啦");
  }, []);
  return <div>About</div>;
}
