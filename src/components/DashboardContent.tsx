"use client";

import { ChevronDown, Layers, Users, GraduationCap, TrendingUp, Plus, Briefcase } from "lucide-react";
import { StatCard } from "./StatCard";
import { ProjectCard } from "./ProjectCard";
import { ModuleSearchBar } from "./ModuleSearchBar";
import { ModuleItem } from "./ModuleItem";
import { Pagination } from "./Pagination";

export function DashboardContent() {
    return (
        <div className="p-8 space-y-8 bg-[#f8f9fc] min-h-screen">
            {/* Course Banner */}
            <div className="bg-[#1e2a5e] rounded-2xl p-8 text-white relative overflow-hidden shadow-xl shadow-[#1e2a5e]/10">
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-1">
                        <span className="text-blue-300 text-sm font-medium uppercase tracking-wider">Lagos Business School</span>
                        <h2 className="text-3xl font-bold">Executive MBA (EMBA)</h2>
                    </div>

                    <button className="bg-white text-[#1e2a5e] px-4 py-2.5 rounded-lg flex items-center justify-between gap-3 font-semibold hover:bg-gray-50 transition-colors w-full md:w-auto min-w-[180px]">
                        Switch Course
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                    </button>
                </div>

                {/* Subtle Decorative Gradient */}
                <div className="absolute top-0 right-0 w-64 h-full bg-linear-to-l from-white/10 to-transparent pointer-events-none"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    icon={Layers}
                    value="8"
                    label="Total Modules"
                    iconBg="bg-blue-50"
                    iconColor="text-[#1e2a5e]"
                />
                <StatCard
                    icon={Users}
                    value="485"
                    label="Total Facilitators"
                    iconBg="bg-green-50"
                    iconColor="text-green-600"
                />
                <StatCard
                    icon={GraduationCap}
                    value="8,540"
                    label="Total Students"
                    iconBg="bg-indigo-50"
                    iconColor="text-indigo-600"
                />
                <StatCard
                    icon={TrendingUp}
                    value="85%"
                    label="Module Completion Rate"
                    iconBg="bg-orange-50"
                    iconColor="text-orange-500"
                />
            </div>

            {/* Action Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-4 border-t border-gray-100">
                <div className="space-y-1">
                    <h3 className="text-xl font-bold text-[#1e2a5e]">Manage Modules</h3>
                    <p className="text-gray-500 text-sm">
                        View and manage modules under <span className="font-semibold text-[#1e2a5e]">Executive MBA (EMBA)</span>
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-gray-200 text-[#1e2a5e] font-semibold hover:bg-white hover:shadow-md transition-all">
                        <Briefcase className="w-4 h-4" />
                        Manage Course Final Project
                    </button>
                    <button className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#1e2a5e] text-white font-semibold hover:bg-[#2a3b82] hover:shadow-lg transition-all">
                        <Plus className="w-4 h-4" />
                        Create Module
                    </button>
                </div>
            </div>

            {/* Project and Search Section */}
            <div className="space-y-6">
                <ProjectCard />
                <ModuleSearchBar />
            </div>

            {/* Modules List */}
            <div className="space-y-4">
                <ModuleItem
                    id="EMBA 701"
                    title="Leadership & Organizational Behavior"
                    admin={{ name: "Prof. Kunle Adebayo", email: "kunle.adebayo@lbs.edu.ng" }}
                    status="Active"
                    topics={12}
                    students={35}
                    duration="2 hours"
                    progress={92}
                />
                <ModuleItem
                    id="EMBA 702"
                    title="Strategic Management"
                    admin={{ name: "Dr. Ifeoma Nwachukwu", email: "ifeoma.nwachukwu@lbs.edu.ng" }}
                    status="Invite Sent"
                    topics={10}
                    students={32}
                    duration="2 hours"
                    progress={85}
                />
                <ModuleItem
                    id="EMBA 703"
                    title="Corporate Finance"
                    admin={{ name: "Prof. Kunle Adebayo", email: "adebayo.kunle@lbs.edu.ng" }}
                    status="Expired link"
                    topics={10}
                    students={32}
                    duration="2 hours"
                    progress={65}
                />
                <ModuleItem
                    id="EMBA 704"
                    title="Business Ethics & Sustainability"
                    admin={{ name: "Not Assigned", email: "" }}
                    status="Inactive"
                    topics={10}
                    students={32}
                    duration="2 hours"
                    progress={65}
                />
            </div>

            <Pagination />
        </div>
    );
}
