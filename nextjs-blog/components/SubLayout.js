import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <h1>
        <Link href="/">HOME으로</Link>
        {children}
      </h1>
    </div>
  );
}
