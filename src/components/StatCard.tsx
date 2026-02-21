"use client";

import { LucideIcon } from "lucide-react";

interface StatCardProps {
    icon: LucideIcon;
    value: string;
    label: string;
    iconBg: string;
    iconColor: string;
}

export function StatCard({ icon: Icon, value, label, iconBg, iconColor }: StatCardProps) {
    return (
        <div className="bg-white p-3 md:p-4 lg:p-6 rounded-lg md:rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-50 flex items-center gap-2 md:gap-3 lg:gap-4 hover:shadow-lg transition-shadow duration-300">
            <div className={`w-10 md:w-11 lg:w-12 h-10 md:h-11 lg:h-12 rounded-lg ${iconBg} flex items-center justify-center flex-shrink-0`}>
                <Icon className={`w-5 md:w-5.5 lg:w-6 h-5 md:h-5.5 lg:h-6 ${iconColor}`} />
            </div>
            <div className="flex flex-col min-w-0">
                <span className="text-lg md:text-xl lg:text-2xl font-bold text-[#1e2a5e]">{value}</span>
                <span className="text-xs md:text-sm text-gray-500 font-medium line-clamp-1">{label}</span>
            </div>
        </div>
    );
}
