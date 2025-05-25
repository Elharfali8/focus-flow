'use client'
import { LayoutDashboard, ListChecks, Timer, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Sidebar = () => {

    const navItems = [
        { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
        { name: "Tasks", href: "/tasks", icon: ListChecks },
        { name: "Pomodoro", href: "/pomodoro", icon: Timer },
        { name: "Settings", href: "/settings", icon: Settings },
    ];

    const path = usePathname();

    return (
        <aside className="w-64 bg-white dark:bg-zinc-800 shadow-md h-full hidden md:block">
            <div className="p-6 font-bold text-xl">FocusFlow</div>
            <nav className="flex flex-col gap-2 px-4">
                {navItems.map((item) => (
                    <Link key={item.name} href={item.href}>
                        <div
                            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition ${path === item.href
                                    ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-500 dark:text-white"
                                    : "hover:bg-zinc-100 dark:hover:bg-zinc-700"
                                }`}
                        >
                            <item.icon className="w-5 h-5" />
                            <span className="text-lg">{item.name}</span>
                        </div>
                    </Link>
                ))}
            </nav>
        </aside>
    )
}

export default Sidebar