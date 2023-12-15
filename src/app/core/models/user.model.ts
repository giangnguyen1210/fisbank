export interface User{
    id: string;
    name: string;
    email: string;
    roleName: string;
    roleId: number;
    statusName: string;
    status: string;
    avatar: string;
}

export interface UserList{
    totalRecords: number;
    data: Array<User>;
}

export interface UserRequest{
    id: string;
    name: string;
    email: string;
    roleName: string;
    roleId: number;
    statusName: string;
    status: string;
    avatar: string;
}