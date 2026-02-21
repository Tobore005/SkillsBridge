"use client";

import {
    LayoutDashboard,
    BookOpen,
    Layers,
    ListTodo,
    Users,
    GraduationCap,
    BarChart3,
    Settings,
    X
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: BookOpen, label: "Courses", href: "/courses" },
    { icon: Layers, label: "Modules", href: "/" }, // Set as active for demo
    { icon: ListTodo, label: "Topics", href: "/topics" },
    { icon: Users, label: "Facilitators", href: "/facilitators" },
    { icon: GraduationCap, label: "Students", href: "/students" },
    { icon: BarChart3, label: "Reports & Analytics", href: "/reports" },
    { icon: Settings, label: "Settings", href: "/settings" },
];

export function Sidebar({ isOpen, onClose }: { isOpen?: boolean; onClose?: () => void }) {
    const pathname = usePathname();

    return (
        <>
            {/* Mobile Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                onClick={onClose}
            />

            <div className={`w-64 h-screen bg-[#1e2a5e] flex flex-col fixed left-0 top-0 text-white transition-transform duration-300 ease-in-out z-50 ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
                {/* Logo Section */}
                <div className="p-6 bg-white flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/skillsbridge-logo.svg"
                            alt="SkillsBridge Logo"
                            width={160}
                            height={40}
                            priority
                        />
                    </div>
                    <button onClick={onClose} className="lg:hidden p-2 text-[#1e2a5e] hover:bg-gray-100 rounded-lg">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 mt-6 px-4 space-y-2">
                    {navItems.map((item) => {
                        const isActive = item.href === "/"; // Hardcoded for the image likeness
                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${isActive
                                    ? "bg-[#4dabf7] text-white shadow-lg shadow-[#4dabf7]/20"
                                    : "text-blue-100 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                <item.icon className={`w-5 h-5 ${isActive ? "text-white" : "text-blue-300 group-hover:text-white"}`} />
                                <span className="font-medium">{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </>
    );
}
