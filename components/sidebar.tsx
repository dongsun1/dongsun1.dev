import Link from 'next/link';

export default function SideBar() {
  return (
    <div className="px-5 w-1/6">
      <div className="grid grid-cols-1 divide-y sticky top-2 w-44">
        <Link href="" className="flex items-center justify-between hover:bg-slate-100 px-2 py-3">
          <span>All</span>
          <div className="flex items-center border rounded-xl px-2 py-1 text-white bg-black text-xs">
            <span>14</span>
          </div>
        </Link>
        <Link href="" className="flex items-center justify-between hover:bg-slate-100 px-2 py-3">
          <span>example</span>
          <div className="flex items-center border rounded-xl px-2 py-1 text-white bg-black text-xs">
            <span>4</span>
          </div>
        </Link>
        <Link href="" className="flex items-center justify-between hover:bg-slate-100 px-2 py-3">
          <span>junk</span>
          <div className="flex items-center border rounded-xl px-2 py-1 text-white bg-black text-xs">
            <span>10</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
