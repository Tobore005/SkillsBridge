"use client";

import { Search, Filter, ChevronDown } from "lucide-react";
import { ModuleStatus } from "@/types/module";
import { useState, useRef, useEffect } from "react";

interface ModuleSearchBarProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    statusFilter: ModuleStatus;
    onStatusChange: (status: ModuleStatus) => void;
}

export function ModuleSearchBar({
    searchTerm,
    onSearchChange,
    statusFilter,
    onStatusChange
}: ModuleSearchBarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const statuses: ModuleStatus[] = ["All Status", "Active", "Invite Sent", "Expired link", "Inactive"];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-4 bg-white p-3 md:p-4 rounded-lg md:rounded-xl shadow-sm border border-gray-50">
            <div className="relative flex-1 w-full">
                <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-4 md:w-5 h-4 md:h-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search modules..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2 md:py-3 bg-gray-100/80 border-transparent rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-200 transition-all text-xs md:text-sm outline-none placeholder:text-gray-400"
                />
            </div>

            <div className="relative w-full md:w-auto" ref={dropdownRef}>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center justify-between gap-2 md:gap-3 px-3 md:px-6 py-2 md:py-3 bg-gray-100/80 hover:bg-gray-200/80 rounded-lg text-[#1e2a5e] font-semibold transition-all w-full md:w-auto min-w-[140px] md:min-w-[160px] text-xs md:text-sm"
                >
                    <div className="flex items-center gap-1.5 md:gap-2 min-w-0">
                        <Filter className="w-4 h-4 text-gray-500 flex-shrink-0" />
                        <span className="truncate">{statusFilter}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                    <div className="absolute left-0 md:right-0 mt-2 w-full md:w-48 bg-white border border-gray-100 rounded-xl shadow-lg z-50 py-2 animate-in fade-in zoom-in duration-200">
                        {statuses.map((status) => (
                            <button
                                key={status}
                                onClick={() => {
                                    onStatusChange(status);
                                    setIsOpen(false);
                                }}
                                className={`w-full text-left px-3 md:px-4 py-2 text-xs md:text-sm hover:bg-gray-50 transition-colors ${statusFilter === status ? 'text-blue-600 font-bold bg-blue-50/50' : 'text-gray-600'
                                    }`}
                            >
                                {status}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
