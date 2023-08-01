import {createContext} from "react";
import {TPermission} from "@/src/modules/role/domain/types/endpoints/role-endpoints";

export interface PermissionContextType {
    isAllowedTo: (permission: TPermission) => boolean
}

const defaultBehaviour: PermissionContextType = {
    isAllowedTo: (): boolean => false
}

const PermissionContext = createContext<PermissionContextType>(defaultBehaviour);

export default PermissionContext;
