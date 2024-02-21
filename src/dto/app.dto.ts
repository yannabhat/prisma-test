
export class UserMasterDto {
    user_id : string
    age ?:number
}

export class UserGroupDto {
    user_id : string
    user_group ?: string
}


export class User implements UserGroupDto, UserMasterDto {
    user_id: string;
    user_group?: string;
    age?: number;
}