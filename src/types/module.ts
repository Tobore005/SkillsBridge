export type ModuleStatus = "Active" | "Invite Sent" | "Expired link" | "Inactive" | "All Status";

export interface AdminInfo {
    name: string;
    email: string;
}

export interface Module {
    id: string;
    title: string;
    admin: AdminInfo;
    status: Exclude<ModuleStatus, "All Status">;
    topics: number;
    students: number;
    duration: string;
    progress: number;
}
