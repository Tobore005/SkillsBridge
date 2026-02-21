"use client";

import {
  Eye,
  Edit2,
  Trash2,
  BookOpen,
  GraduationCap,
  Clock,
  CheckCircle2,
  Mail,
  Layers,
  XCircle,
  UserMinus,
} from "lucide-react";
import { Module } from "@/types/module";

interface ModuleItemProps extends Module {}

export function ModuleItem({
  id,
  title,
  admin,
  status,
  topics,
  students,
  duration,
  progress,
}: ModuleItemProps) {
  return (
    <div className="bg-white rounded-lg md:rounded-xl border border-gray-100 p-3 md:p-4 lg:p-6 shadow-sm hover:shadow-md transition-all">
      <div className="flex flex-col lg:flex-row justify-between gap-4 md:gap-5 lg:gap-6">
        {/* Left Side: Info & Admin */}
        <div className="flex-1 space-y-3 md:space-y-4">
          <div className="flex items-start gap-2 md:gap-3 lg:gap-4">
            <div className="w-9 md:w-10 h-9 md:h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
              <Layers className="w-4 md:w-5 h-4 md:h-5 text-blue-600" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="space-y-1 mb-3 md:mb-5">
                <div className="flex items-center gap-2 md:gap-3 flex-wrap">
                  <h4 className="font-inter font-medium text-sm md:text-base lg:text-[20px] leading-[100%] tracking-[0%] text-black">
                    <span className="hidden sm:inline">{id} — </span>{title}
                  </h4>
                  <span
                    className={`px-2 md:px-3 py-0.5 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-wider ${
                      status === "Inactive"
                        ? "bg-gray-200 text-gray-600"
                        : "bg-green-50 text-green-600"
                    }`}
                  >
                    {status === "Inactive" ? "Inactive" : "Active"}
                  </span>
                </div>
                <div className="mt-2 text-xs md:text-sm">
                  <p className="text-gray-400 font-medium">Assigned Admin</p>
                  <p className="text-[#1e2a5e] font-bold line-clamp-1">{admin.name}</p>
                  <p className="text-gray-400 text-xs line-clamp-1">{admin.email}</p>
                </div>
              </div>

              {/* Status Box */}
              <div
                className={`w-full lg:w-fit min-w-0 md:min-w-[300px] p-2 md:p-4 rounded-lg md:rounded-xl border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 md:gap-4 ${
                  status === "Active"
                    ? "bg-green-50/50 border-green-100"
                    : status === "Invite Sent"
                    ? "bg-indigo-50/50 border-indigo-100"
                    : status === "Expired link"
                    ? "bg-red-50/50 border-red-100"
                    : "bg-slate-100/50 border-slate-200"
                }`}
              >
                <div className="flex items-start gap-2 md:gap-3">
                  {status === "Active" && (
                    <>
                      <CheckCircle2 className="w-4 md:w-5 h-4 md:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-green-600 font-bold text-xs md:text-sm">
                          Active
                        </p>
                        <p className="text-gray-500 text-xs leading-tight">
                          Admin has dashboard access
                        </p>
                      </div>
                    </>
                  )}
                  {status === "Invite Sent" && (
                    <>
                      <Mail className="w-4 md:w-5 h-4 md:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-blue-600 font-bold text-xs md:text-sm">
                          Invite Sent
                        </p>
                        <p className="text-gray-500 text-xs leading-tight">
                          Awaiting profile completion
                        </p>
                      </div>
                    </>
                  )}
                  {status === "Expired link" && (
                    <>
                      <XCircle className="w-4 md:w-5 h-4 md:h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-red-600 font-bold text-xs md:text-sm">
                          Expired link
                        </p>
                        <p className="text-gray-500 text-xs leading-tight">
                          Invitation link expired
                        </p>
                      </div>
                    </>
                  )}
                  {status === "Inactive" && (
                    <>
                      <UserMinus className="w-4 md:w-5 h-4 md:h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-gray-500 font-bold text-xs md:text-sm">
                          Inactive
                        </p>
                        <p className="text-gray-500 text-xs leading-tight">
                          No admin assigned
                        </p>
                      </div>
                    </>
                  )}
                </div>

                {(status === "Expired link" || status === "Inactive") && (
                  <button className="px-2 md:px-3 py-1 md:py-1.5 bg-white border border-gray-200 rounded-lg text-[9px] md:text-[11px] font-bold text-[#1e2a5e] hover:bg-gray-50 transition-colors shadow-sm whitespace-nowrap self-center sm:self-auto">
                    {status === "Expired link"
                      ? "Resend Invite"
                      : "Assign Admin"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Stats & Actions */}
        <div className="lg:w-1/3 flex flex-col justify-between gap-3 md:gap-4 lg:gap-6">
          <div className="flex flex-wrap items-center justify-start md:justify-end gap-1 md:gap-2">
            <button className="flex items-center justify-center gap-1 px-2 md:px-4 py-1.5 md:py-2 rounded-lg border border-gray-200 text-[#1e2a5e] font-semibold text-xs md:text-sm hover:bg-gray-50 transition-colors">
              <Eye className="w-3.5 md:w-4 h-3.5 md:h-4" />
              <span className="hidden sm:inline">View Details</span>
              <span className="sm:hidden">View</span>
            </button>
            <button className="flex items-center justify-center gap-1 px-2 md:px-4 py-1.5 md:py-2 rounded-lg border border-gray-200 text-[#1e2a5e] font-semibold text-xs md:text-sm hover:bg-gray-50 transition-colors">
              <Edit2 className="w-3.5 md:w-4 h-3.5 md:h-4" />
              <span className="hidden sm:inline">Edit</span>
            </button>
            <button className="p-1.5 md:p-2 rounded-lg border border-red-100 text-red-500 hover:bg-red-50 transition-colors">
              <Trash2 className="w-3.5 md:w-4 h-3.5 md:h-4" />
            </button>
          </div>

          <div className="space-y-2 md:space-y-4">
            <div className="flex items-center justify-start md:justify-end gap-2 md:gap-4 lg:gap-6 text-xs md:text-sm text-gray-500 flex-wrap">
              <div className="flex items-center gap-1 font-medium">
                <BookOpen className="w-3 md:w-4 h-3 md:h-4" />
                <span>{topics}</span>
                <span className="hidden sm:inline">Topics</span>
              </div>
              <div className="flex items-center gap-1 font-medium">
                <GraduationCap className="w-3 md:w-4 h-3 md:h-4" />
                <span>{students}</span>
                <span className="hidden sm:inline">Students</span>
              </div>
              <div className="flex items-center gap-1 font-medium">
                <Clock className="w-3 md:w-4 h-3 md:h-4" />
                <span className="hidden sm:inline">{duration}</span>
                <span className="sm:hidden">2h</span>
              </div>
            </div>

            <div className="space-y-1 md:space-y-2">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-400 font-medium tracking-tight">
                  Progress
                </span>
                <span className="text-[#1e2a5e] font-bold">{progress}%</span>
              </div>
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#1e2a5e] rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
