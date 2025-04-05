import Link from 'next/link';

interface BtnProps {
  title: string;
  path: string;
}

export default function BtnPrimary({ title, path }: Readonly<BtnProps>) {
  return (
    <Link
      href={path}
      className="text-xl bg-text-base text-primary px-3 py-2 rounded-sm font-bold"
    >
      {title}
    </Link>
  );
}
