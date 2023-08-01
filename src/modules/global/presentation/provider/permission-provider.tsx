import {TPermission} from "@/src/modules/role/domain/types/endpoints/role-endpoints";
import React, {ReactNode} from "react";
import PermissionContext from "@/src/modules/global/presentation/context/permission-context";

interface IPermissionProviderProps {
    permissions: string[]
    children: ReactNode
}

export default function PermissionProvider({permissions, children}: IPermissionProviderProps): ReactNode {
    const isAllowedTo = (permission: TPermission): boolean => {
        return permissions.includes(permission)
    };
    return <PermissionContext.Provider value={{isAllowedTo}}>{children}</PermissionContext.Provider>
}
