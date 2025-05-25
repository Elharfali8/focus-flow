import Sidebar from '@/components/Sidebar'
import TopBar from '@/components/TopBar'
import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
      <div className="flex h-screen overflow-hidden bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white">
          <Sidebar />
          <div className="flex-1 flex flex-col ">
              <TopBar />
              <main className="flex-1 overflow-y-auto p-6">{children}</main>
              </div>
    </div>
  )
}

export default layout