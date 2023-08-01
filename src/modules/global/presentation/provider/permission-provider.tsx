import {TPermission} from "@/src/modules/role/domain/types/endpoints/role-endpoints";
import React, {ReactNode, useMemo} from "react";
import PermissionContext, {PermissionContextType} from "@/src/modules/global/presentation/context/permission-context";

interface IPermissionProviderProps {
    permissions: string[]
    children: ReactNode
}

export default function PermissionProvider({permissions, children}: IPermissionProviderProps): ReactNode {
    const isAllowedTo = (permission: TPermission): boolean => permissions.includes(permission);
    const contextValue = useMemo((): PermissionContextType => ({isAllowedTo}), [permissions]);
    return <PermissionContext.Provider value={contextValue}>{children}</PermissionContext.Provider>
}
