"use client";

import {
  ChevronDown,
  Layers,
  Users,
  GraduationCap,
  TrendingUp,
  Plus,
  Briefcase,
} from "lucide-react";
import { StatCard } from "./StatCard";
import { ProjectCard } from "./ProjectCard";
import { ModuleSearchBar } from "./ModuleSearchBar";
import { ModuleItem } from "./ModuleItem";
import { Pagination } from "./Pagination";
import { useModuleFilter } from "@/hooks/useModuleFilter";
import { Module } from "@/types/module";

const DUMMY_MODULES: Module[] = [
  {
    id: "EMBA 701",
    title: "Leadership & Organizational Behavior",
    admin: { name: "Prof. Kunle Adebayo", email: "kunle.adebayo@lbs.edu.ng" },
    status: "Active",
    topics: 12,
    students: 35,
    duration: "2 hours",
    progress: 92,
  },
  {
    id: "EMBA 702",
    title: "Strategic Management",
    admin: {
      name: "Dr. Ifeoma Nwachukwu",
      email: "ifeoma.nwachukwu@lbs.edu.ng",
    },
    status: "Invite Sent",
    topics: 10,
    students: 32,
    duration: "2 hours",
    progress: 85,
  },
  {
    id: "EMBA 703",
    title: "Corporate Finance",
    admin: { name: "Prof. Kunle Adebayo", email: "adebayo.kunle@lbs.edu.ng" },
    status: "Expired link",
    topics: 10,
    students: 32,
    duration: "2 hours",
    progress: 65,
  },
  {
    id: "EMBA 704",
    title: "Business Ethics & Sustainability",
    admin: { name: "Not Assigned", email: "" },
    status: "Inactive",
    topics: 10,
    students: 32,
    duration: "2 hours",
    progress: 65,
  },
];

export function DashboardContent() {
  const {
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    filteredModules,
  } = useModuleFilter(DUMMY_MODULES);

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8 bg-[#f8f9fc] min-h-screen">
      {/* Course Banner */}
      <div className="bg-[linear-gradient(90.09deg,#2D479C_0.07%,#101936_127.65%)] rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 text-white relative overflow-hidden shadow-xl shadow-[#1e2a5e]/10">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6">
          <div className="space-y-1">
            <span className="text-blue-300 text-xs md:text-sm font-medium uppercase tracking-wider">
              Lagos Business School
            </span>
            <h2 className="text-lg md:text-2xl lg:heading-primary font-medium md:font-medium">Executive MBA (EMBA)</h2>
          </div>

          <button className="bg-white text-[#1e2a5e] px-3 md:px-4 py-2 md:py-2.5 rounded-lg flex items-center justify-between gap-2 md:gap-3 font-semibold hover:bg-gray-50 transition-colors w-full md:w-auto min-w-[160px] md:min-w-[180px] text-sm md:text-base">
            Switch Course
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
        </div>

        {/* Subtle Decorative Gradient */}
        <div className="absolute top-0 right-0 w-64 h-full bg-linear-to-l from-white/10 to-transparent pointer-events-none"></div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
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
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 pt-4 border-t border-gray-100">
        <div className="space-y-1">
          <h4 className="font-inter font-medium text-lg md:text-[24px] leading-[100%] tracking-[0%] text-black">
            Manage Modules
          </h4>
          <p className="text-gray-500 text-xs md:text-sm">
            View and manage modules under{" "}
            <span className="font-semibold text-[#1e2a5e]">
              Executive MBA (EMBA)
            </span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-4 w-full md:w-auto">
          <button className="flex items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-2.5 rounded-lg border border-gray-200 text-[#1e2a5e] font-semibold hover:bg-white hover:shadow-md transition-all text-xs md:text-sm w-full sm:w-auto whitespace-nowrap">
            <Briefcase className="w-4 h-4" />
            <span className="hidden sm:inline">Manage Course Final Project</span>
            <span className="sm:hidden">Manage Project</span>
          </button>
          <button className="flex items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-2.5 rounded-lg bg-[#1e2a5e] text-white font-semibold hover:bg-[#2a3b82] hover:shadow-lg transition-all text-xs md:text-sm w-full sm:w-auto whitespace-nowrap">
            <Plus className="w-4 h-4" />
            <span>Create Module</span>
          </button>
        </div>
      </div>

      {/* Project and Search Section */}
      <div className="space-y-4 md:space-y-6">
        <ProjectCard />
        <ModuleSearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          statusFilter={statusFilter}
          onStatusChange={setStatusFilter}
        />
      </div>

      {/* Modules List */}
      <div className="space-y-3 md:space-y-4">
        {filteredModules.length > 0 ? (
          filteredModules.map((module) => (
            <ModuleItem key={module.id} {...module} />
          ))
        ) : (
          <div className="py-20 text-center bg-white rounded-xl border border-dashed border-gray-300 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Layers className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-500">
              No modules found
            </h3>
            <p className="text-gray-400">Try adjusting your search or filter</p>
          </div>
        )}
      </div>

      <Pagination />
    </div>
  );
}
