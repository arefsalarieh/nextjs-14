import Link from "next/link";

export default function F4() {
  return (
    <>
      <h1>F4 page</h1>
      <div>
        <Link href="/InterceptingRoutesB/f3"  className='text-blue-400'>go to F3</Link>
      </div>
    </>
  );
}
