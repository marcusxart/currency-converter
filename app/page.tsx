import Image from "next/image";
import Button from "./components/Button";

export default function Home() {
  return (
    <main>
      <Button text="Start" href="/about" />
    </main>
  );
}
