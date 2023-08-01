"use client"

import {TPermission} from "@/src/modules/role/domain/types/endpoints/role-endpoints";
import {ReactNode, useContext} from "react";
import PermissionContext from "@/src/modules/global/presentation/context/permission-context";

interface IRestrictedProps {
    to: TPermission
    children: ReactNode
}

// This component is meant to be used everywhere a restriction based on user permission is needed
function Restricted({to, children}: IRestrictedProps): ReactNode | null {
    const {isAllowedTo} = useContext(PermissionContext);
    if (isAllowedTo(to)) {
        return children;
    }

    return null;
}

export default Restricted;
