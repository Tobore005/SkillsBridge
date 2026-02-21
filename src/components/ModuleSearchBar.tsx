"use client";

import { Search, Filter, ChevronDown } from "lucide-react";

export function ModuleSearchBar() {
    return (
        <div className="flex flex-col md:flex-row items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-50">
            <div className="relative flex-1 w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search modules..."
                    className="w-full pl-12 pr-4 py-3 bg-gray-100/80 border-transparent rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-200 transition-all text-sm outline-none placeholder:text-gray-400"
                />
            </div>

            <button className="flex items-center justify-between gap-3 px-6 py-3 bg-gray-100/80 hover:bg-gray-200/80 rounded-lg text-[#1e2a5e] font-semibold transition-all w-full md:w-auto min-w-[160px]">
                <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-gray-500" />
                    <span className="text-sm">All Status</span>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
        </div>
    );
}
