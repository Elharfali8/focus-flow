import React from 'react'

type Props = {
  label: string;
  value: string;
}


const StatCard = ({label, value}:Props) => {
  return (
    <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm border dark:border-zinc-700">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{label}</p>
          <h3 className="text-2xl font-semibold mt-1">{value}</h3>
      </div>
  )
}

export default StatCard