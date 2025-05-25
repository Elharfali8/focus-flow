import ShortcutCard from '@/components/ShortcutCard'
import StatCard from '@/components/StatCard'
import { ListChecks, Settings, Timer } from 'lucide-react'
import React from 'react'

const DashboardPage = () => {
  return (
      <div className='space-y-6'>
          {/* ---- */}
          <div>
              <h1 className='text-3xl font-bold'>Welcome, User</h1>
              <p className='text-zinc-600 dark:text-zinc-400 mt-1'>
              Here’s a quick look at your productivity today.
              </p>
          </div>
          {/* ---- */}
          <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
            <StatCard label="Tasks Today" value="4" />
            <StatCard label="Focus Time" value="1h 45m" />
            <StatCard label="Completed" value="7" />
          </div>
          {/* ---- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ShortcutCard
          icon={ListChecks}
          title="Manage Tasks"
          desc="Organize, prioritize, and plan"
          href="/tasks"
        />
        <ShortcutCard
          icon={Timer}
          title="Pomodoro Timer"
          desc="Focus with Pomodoro sessions"
          href="/pomodoro"
        />
        <ShortcutCard
          icon={Settings}
          title="Settings"
          desc="Adjust your preferences"
          href="/settings"
        />
      </div>
    </div>
  )
}

export default DashboardPage