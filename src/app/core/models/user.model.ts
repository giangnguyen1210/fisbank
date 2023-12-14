export interface User{
    id: string;
    name: string;
    email: string;
    roleName: string;
    role: string;
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
    role: string;
    statusName: string;
    status: string;
    avatar: string;
}