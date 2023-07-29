import { Role } from "@/src/modules/role-management/domain/types"

export const roles: Role[] = [
  {
    id: "599eb4eb-be47-41cf-a92d-e342b33d97e4",
    name: "Superuser",
    permissions: [
      {
        id: "6a574ad5-d3f4-4b0c-aaca-77fcb7ab3299",
        code: "DELETE",
        screen: "Screen Management",
      },
      {
        id: "cda1e861-4b09-4997-aaba-ea6efe1ccb9f",
        code: "UPDATE",
        screen: "Screen Management",
      },
      {
        id: "7ddc6ccf-cc58-4053-81f7-ff6a53c52fcf",
        code: "READ",
        screen: "Screen Management",
      },
      {
        id: "6ddc4cba-8649-46a1-bd0f-d6cf8b5b2830",
        code: "CREATE",
        screen: "Screen Management",
      },
      {
        id: "a045a571-6d73-4136-bd03-368b45c317c4",
        code: "READ",
        screen: "Role Management",
      },
      {
        id: "3d0320cc-2aeb-4d81-888e-1076f0214852",
        code: "CREATE",
        screen: "Dashboard",
      },
      {
        id: "68cbbbca-d7ce-420d-b235-aadfde57d93c",
        code: "READ",
        screen: "Dashboard",
      },
      {
        id: "89df66b2-e63d-4b13-b634-0203bd7b8f36",
        code: "UPDATE",
        screen: "Dashboard",
      },
      {
        id: "2431d205-46f0-4bde-bf92-5f09854127a6",
        code: "DELETE",
        screen: "Dashboard",
      },
      {
        id: "67c3653a-aeff-415b-a80f-a2ef2daa616d",
        code: "UPDATE",
        screen: "User Management",
      },
      {
        id: "a26b6c12-b58d-43d9-a01d-b18031caae5f",
        code: "CREATE",
        screen: "User Management",
      },
      {
        id: "bac383be-7153-4ee7-a7d5-60d0ca0b7960",
        code: "READ",
        screen: "User Management",
      },
      {
        id: "d80c4af8-0a5c-413f-8c54-4a8038c5beb3",
        code: "DELETE",
        screen: "User Management",
      },
    ],
  },
  {
    id: "ca865566-5e3f-4132-9e75-312d21cfe3e7",
    name: "Customer",
    permissions: [
      {
        id: "67c3653a-aeff-415b-a80f-a2ef2daa616d",
        code: "UPDATE",
        screen: "User Management",
      },
      {
        id: "a26b6c12-b58d-43d9-a01d-b18031caae5f",
        code: "CREATE",
        screen: "User Management",
      },
      {
        id: "bac383be-7153-4ee7-a7d5-60d0ca0b7960",
        code: "READ",
        screen: "User Management",
      },
      {
        id: "d80c4af8-0a5c-413f-8c54-4a8038c5beb3",
        code: "DELETE",
        screen: "User Management",
      },
    ],
  },
]
