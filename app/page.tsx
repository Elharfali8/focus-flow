import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <main className='bg-white dark:bg-zinc-900 min-h-screen text-black dark:text-white px-6 py-20 grid place-items-center'>
      <div className='grid place-items-center'>
        <h1 className='text-4xl lg:text-5xl text-center font-bold text-zinc-800 dark:text-white'>
          Stay Focused. Get Things Done.
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-xl text-center">
        FocusFlow is your all-in-one task manager with Pomodoro, priorities, and a clean, drag-and-drop dashboard.
      </p>
      <Link href="/dashboard">
        <button className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-xl text-lg font-medium hover:bg-indigo-700 transition cursor-pointer">
          Get Started
        </button>
      </Link>
      </div>
    </main>
  )
}

export default HomePage