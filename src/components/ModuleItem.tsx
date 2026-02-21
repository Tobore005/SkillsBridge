"use client";

import { Eye, Edit2, Trash2, BookOpen, GraduationCap, Clock, CheckCircle2, Mail, Layers, XCircle, UserMinus } from "lucide-react";

interface AdminInfo {
    name: string;
    email: string;
}

interface ModuleItemProps {
    id: string;
    title: string;
    admin: AdminInfo;
    status: "Active" | "Invite Sent" | "Expired link" | "Inactive";
    topics: number;
    students: number;
    duration: string;
    progress: number;
}

export function ModuleItem({
    id,
    title,
    admin,
    status,
    topics,
    students,
    duration,
    progress
}: ModuleItemProps) {
    return (
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col lg:flex-row justify-between gap-6">
                {/* Left Side: Info & Admin */}
                <div className="flex-1 space-y-4">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                            <Layers className="w-5 h-5 text-blue-600" />
                        </div>
                        <div >
                            <div className="space-y-1 mb-5">
                                <div className="flex items-center gap-3 flex-wrap">
                                    <h4 className="text-lg font-bold text-[#1e2a5e]">{id} — {title}</h4>
                                    <span className={`px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${status === "Inactive" ? "bg-gray-200 text-gray-600" : "bg-green-50 text-green-600"
                                        }`}>
                                        {status === "Inactive" ? "Inactive" : "Active"}
                                    </span>
                                </div>
                                <div className="mt-2 text-sm">
                                    <p className="text-gray-400 font-medium">Assigned Admin</p>
                                    <p className="text-[#1e2a5e] font-bold">{admin.name}</p>
                                    <p className="text-gray-400 text-xs">{admin.email}</p>
                                </div>
                            </div>

                            {/* Status Box */}
                            <div className={`w-full lg:w-fit min-w-[300px] p-4 rounded-xl border flex items-center justify-between gap-4 ${status === "Active" ? "bg-green-50/50 border-green-100" :
                                status === "Invite Sent" ? "bg-indigo-50/50 border-indigo-100" :
                                    status === "Expired link" ? "bg-red-50/50 border-red-100" :
                                        "bg-slate-100/50 border-slate-200"
                                }`}>
                                <div className="flex items-start gap-3">
                                    {status === "Active" && (
                                        <>
                                            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                                            <div>
                                                <p className="text-green-600 font-bold text-sm">Active</p>
                                                <p className="text-gray-500 text-xs text-nowrap">Admin has dashboard access</p>
                                            </div>
                                        </>
                                    )}
                                    {status === "Invite Sent" && (
                                        <>
                                            <Mail className="w-5 h-5 text-blue-600 mt-0.5" />
                                            <div>
                                                <p className="text-blue-600 font-bold text-sm">Invite Sent</p>
                                                <p className="text-gray-500 text-xs text-nowrap">Awaiting profile completion</p>
                                            </div>
                                        </>
                                    )}
                                    {status === "Expired link" && (
                                        <>
                                            <XCircle className="w-5 h-5 text-red-600 mt-0.5" />
                                            <div>
                                                <p className="text-red-600 font-bold text-sm">Expired link</p>
                                                <p className="text-gray-500 text-xs text-nowrap">Invitation link expired</p>
                                            </div>
                                        </>
                                    )}
                                    {status === "Inactive" && (
                                        <>
                                            <UserMinus className="w-5 h-5 text-gray-500 mt-0.5" />
                                            <div>
                                                <p className="text-gray-500 font-bold text-sm">Inactive</p>
                                                <p className="text-gray-500 text-xs text-nowrap">No admin assigned</p>
                                            </div>
                                        </>
                                    )}
                                </div>

                                {(status === "Expired link" || status === "Inactive") && (
                                    <button className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-[11px] font-bold text-[#1e2a5e] hover:bg-gray-50 transition-colors shadow-sm whitespace-nowrap">
                                        {status === "Expired link" ? "Resend Invite" : "Assign Admin"}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>


                </div>

                {/* Right Side: Stats & Actions */}
                <div className="lg:w-1/3 flex flex-col justify-between gap-6">
                    <div className="flex items-center justify-end gap-2">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-[#1e2a5e] font-semibold text-sm hover:bg-gray-50 transition-colors">
                            <Eye className="w-4 h-4" />
                            View Details
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-[#1e2a5e] font-semibold text-sm hover:bg-gray-50 transition-colors">
                            <Edit2 className="w-4 h-4" />
                            Edit
                        </button>
                        <button className="p-2 rounded-lg border border-red-100 text-red-500 hover:bg-red-50 transition-colors">
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-end gap-6 text-sm text-gray-500">
                            <div className="flex items-center gap-1.5 font-medium">
                                <BookOpen className="w-4 h-4" />
                                <span>{topics} Topics</span>
                            </div>
                            <div className="flex items-center gap-1.5 font-medium">
                                <GraduationCap className="w-4 h-4" />
                                <span>{students} Students</span>
                            </div>
                            <div className="flex items-center gap-1.5 font-medium">
                                <Clock className="w-4 h-4" />
                                <span>{duration}</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-gray-400 font-medium tracking-tight">Avg. Completion Progress</span>
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
