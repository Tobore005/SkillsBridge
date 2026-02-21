"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination() {
    return (
        <div className="flex items-center justify-center gap-2 md:gap-4 py-6 md:py-8">
            <button className="flex items-center justify-center gap-1 md:gap-2 px-2 md:px-4 py-1.5 md:py-2 rounded-lg border border-gray-200 text-[#1e2a5e] font-semibold hover:bg-gray-50 transition-all text-xs md:text-sm group">
                <ChevronLeft className="w-3.5 md:w-4 h-3.5 md:h-4 text-gray-400 group-hover:text-[#1e2a5e]" />
                <span className="hidden sm:inline">Previous</span>
            </button>

            <span className="text-xs md:text-sm font-medium text-gray-400">
                Page <span className="text-[#1e2a5e] font-bold">1</span> of <span className="text-[#1e2a5e] font-bold">2</span>
            </span>

            <button className="flex items-center justify-center gap-1 md:gap-2 px-2 md:px-4 py-1.5 md:py-2 rounded-lg border border-gray-200 text-[#1e2a5e] font-semibold hover:bg-gray-50 transition-all text-xs md:text-sm group">
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-3.5 md:w-4 h-3.5 md:h-4 text-gray-400 group-hover:text-[#1e2a5e]" />
            </button>
        </div>
    );
}
