"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination() {
    return (
        <div className="flex items-center justify-center gap-4 py-8">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-[#1e2a5e] font-semibold hover:bg-gray-50 transition-all text-sm group">
                <ChevronLeft className="w-4 h-4 text-gray-400 group-hover:text-[#1e2a5e]" />
                Previous
            </button>

            <span className="text-sm font-medium text-gray-400">
                Page <span className="text-[#1e2a5e] font-bold">1</span> of <span className="text-[#1e2a5e] font-bold">2</span>
            </span>

            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-[#1e2a5e] font-semibold hover:bg-gray-50 transition-all text-sm group">
                Next
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#1e2a5e]" />
            </button>
        </div>
    );
}
