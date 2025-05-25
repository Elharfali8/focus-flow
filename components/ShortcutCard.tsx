import Link from 'next/link';
import React from 'react'

const ShortcutCard = ({
    icon: Icon,
    title,
    desc,
    href,
  }: {
    icon: React.ElementType;
    title: string;
    desc: string;
    href: string;
    }) => {
    
  return (
    <Link href={href}>
      <div className="bg-indigo-50 dark:bg-zinc-800 p-6 rounded-xl border border-indigo-100 dark:border-zinc-700 hover:shadow-md transition cursor-pointer">
        <div className="flex items-center gap-4">
          <Icon className="w-8 h-8 text-indigo-600" />
          <div>
            <h4 className="text-lg font-bold">{title}</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{desc}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ShortcutCard