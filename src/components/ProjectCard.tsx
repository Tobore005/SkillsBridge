"use client";

import { Award, Eye, FileEdit, CheckSquare, AlertTriangle } from "lucide-react";

export function ProjectCard() {
  return (
    <div className="bg-white rounded-lg md:rounded-xl border border-gray-100 border-l-4 border-l-blue-600 p-4 md:p-6 shadow-sm flex flex-col md:flex-row items-start justify-between gap-4 md:gap-6 transition-all hover:shadow-md">
      <div className="flex gap-3 md:gap-4 w-full">
        <div className="w-10 md:w-12 h-10 md:h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
          <Award className="w-5 md:w-6 h-5 md:h-6 text-blue-600" />
        </div>

        <div className="space-y-2 md:space-y-3 flex-1 min-w-0">
          <div className="flex items-center gap-2 md:gap-3 flex-wrap">
            <span className="text-gray-400 text-xs md:text-sm font-medium">
              Course Final Project
            </span>
            <span className="px-2 md:px-3 py-0.5 rounded-full bg-green-50 text-green-600 text-[9px] md:text-[10px] font-bold uppercase tracking-wider">
              Published
            </span>
          </div>

          <h4 className="font-inter font-medium text-base md:text-lg lg:text-[24px] leading-[100%] tracking-[0%] text-black line-clamp-2 md:line-clamp-none">
            Executive Leadership Capstone
          </h4>

          <p className="text-gray-500 text-xs md:text-sm max-w-2xl leading-relaxed line-clamp-2 md:line-clamp-none">
            A comprehensive capstone project integrating leadership principles,
            strategic thinking, and organizational transformation.
          </p>

          <div className="flex items-center gap-3 md:gap-6 pt-2 flex-wrap">
            <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-gray-500 font-medium">
              <div className="p-1 md:p-1.5 rounded-md bg-blue-50">
                <CheckSquare className="w-3 md:w-4 h-3 md:h-4 text-blue-600" />
              </div>
              <span className="text-[#1e2a5e] font-bold">38</span>
              <span className="hidden sm:inline">Submissions</span>
            </div>

            <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-gray-500 font-medium">
              <div className="p-1 md:p-1.5 rounded-md bg-orange-50">
                <AlertTriangle className="w-3 md:w-4 h-3 md:h-4 text-orange-500" />
              </div>
              <span className="text-[#1e2a5e] font-bold">5</span>
              <span className="hidden sm:inline">Pending</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3 w-full md:w-auto">
        <button className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 md:gap-2 px-3 md:px-6 py-2 rounded-lg border border-gray-200 text-[#1e2a5e] font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap text-xs md:text-sm">
          <Eye className="w-4 h-4" />
          <span className="hidden md:inline">View Project</span>
          <span className="md:hidden">View</span>
        </button>
        <button className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 md:gap-2 px-3 md:px-6 py-2 rounded-lg border border-gray-200 text-[#1e2a5e] font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap text-xs md:text-sm">
          <FileEdit className="w-4 h-4" />
          <span className="hidden md:inline">Edit Project</span>
          <span className="md:hidden">Edit</span>
        </button>
      </div>
    </div>
  );
}
