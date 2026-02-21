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
        <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-50 flex items-center gap-4 hover:shadow-lg transition-shadow duration-300">
            <div className={`w-12 h-12 rounded-lg ${iconBg} flex items-center justify-center`}>
                <Icon className={`w-6 h-6 ${iconColor}`} />
            </div>
            <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#1e2a5e]">{value}</span>
                <span className="text-sm text-gray-500 font-medium">{label}</span>
            </div>
        </div>
    );
}
