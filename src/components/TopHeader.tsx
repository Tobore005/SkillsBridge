"use client";

import { Bell, LogOut, ChevronDown, Menu } from "lucide-react";

export function TopHeader({ onMenuClick }: { onMenuClick?: () => void }) {
    return (
        <header className="h-20 md:h-24 bg-white border-b border-gray-100 flex items-center justify-between px-3 md:px-6 lg:px-8 text-[#1e2a5e]">
            <div className="flex items-center gap-4">
                <button
                    onClick={onMenuClick}
                    className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                    <Menu className="w-6 h-6" />
                </button>
                <div className="min-w-0">
                    <h1 className="text-lg md:text-xl lg:text-2xl font-bold tracking-tight">Welcome, Mrs. Tola!</h1>
                    <p className="text-gray-500 text-xs lg:text-sm mt-1 line-clamp-1 hidden sm:block">
                        Manage your organization operations, users and learning programs.
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-3 md:gap-6">
                {/* Notification */}
                <div className="relative p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
                    <Bell className="w-6 h-6 text-gray-400" />
                    <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </div>

                {/* Profile */}
                <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-9 md:w-10 h-9 md:h-10 rounded-full bg-gray-200 overflow-hidden border border-gray-200 flex-shrink-0">
                        <div className="w-full h-full bg-[#1e2a5e]/10 flex items-center justify-center text-[#1e2a5e] font-bold text-xs md:text-sm">
                            MT
                        </div>
                    </div>
                    <div className="flex flex-col hidden sm:flex">
                        <span className="text-sm font-semibold">Mrs. Tola</span>
                        <span className="text-xs text-gray-500">Organization Admin</span>
                    </div>
                </div>

                {/* Logout */}
                <button className="p-2 rounded-full hover:bg-red-50 text-gray-400 hover:text-red-500 transition-all cursor-pointer">
                    <LogOut className="w-5 h-5" />
                </button>
            </div>
        </header>
    );
}
