import { useState, useMemo } from 'react';
import { Module, ModuleStatus } from '@/types/module';

export function useModuleFilter(initialModules: Module[]) {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState<ModuleStatus>("All Status");

    const filteredModules = useMemo(() => {
        return initialModules.filter((module) => {
            const matchesSearch =
                module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                module.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                module.admin.name.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesStatus = statusFilter === "All Status" || module.status === statusFilter;

            return matchesSearch && matchesStatus;
        });
    }, [searchTerm, statusFilter, initialModules]);

    return {
        searchTerm,
        setSearchTerm,
        statusFilter,
        setStatusFilter,
        filteredModules
    };
}
