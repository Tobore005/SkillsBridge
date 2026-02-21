"use client";

import { Award, Eye, FileEdit, CheckSquare, AlertTriangle } from "lucide-react";

export function ProjectCard() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 border-l-4 border-l-blue-600 p-6 shadow-sm flex flex-col md:flex-row items-start justify-between gap-6 transition-all hover:shadow-md">
      <div className="flex gap-4">
        <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
          <Award className="w-6 h-6 text-blue-600" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-sm font-medium">
              Course Final Project
            </span>
            <span className="px-3 py-0.5 rounded-full bg-green-50 text-green-600 text-[10px] font-bold uppercase tracking-wider">
              Published
            </span>
          </div>

          <h4 className="font-inter font-medium text-[24px] leading-[100%] tracking-[0%] text-black">
            Executive Leadership Capstone
          </h4>

          <p className="text-gray-500 text-sm max-w-2xl leading-relaxed">
            A comprehensive capstone project integrating leadership principles,
            strategic thinking, and organizational transformation.
          </p>

          <div className="flex items-center gap-6 pt-2">
            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
              <div className="p-1.5 rounded-md bg-blue-50">
                <CheckSquare className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-[#1e2a5e] font-bold">38</span> Submissions
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
              <div className="p-1.5 rounded-md bg-orange-50">
                <AlertTriangle className="w-4 h-4 text-orange-500" />
              </div>
              <span className="text-[#1e2a5e] font-bold">5</span> Pending
              Reviews
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 w-full md:w-auto">
        <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2 rounded-lg border border-gray-200 text-[#1e2a5e] font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap">
          <Eye className="w-4 h-4" />
          View Project
        </button>
        <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2 rounded-lg border border-gray-200 text-[#1e2a5e] font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap">
          <FileEdit className="w-4 h-4" />
          Edit Project
        </button>
      </div>
    </div>
  );
}
