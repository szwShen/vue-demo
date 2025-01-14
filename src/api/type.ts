export interface User {
    id: string,
    userNumber: string,
    Email: string,
    userName: string,
    userPhone: string,
    passWord: string,
    date: string,
    userSex: string,
    section: string,
    brief: string,
    userRole: string,
    state: boolean,
    token?: string
}

//定义用户相关数据的ts类型
//用户登录接口携带参数的ts类型
export interface loginFormData {
    username: string,
    password: string
}

//定义全部接口返回数据都拥有ts类型
export interface ResponseData{
    code:number,
    message:string,
    ok:boolean
}

//定义登录接口返回数据类型
export interface loginResponseData extends ResponseData{
       data:string
}

//定义获取用户信息返回数据类型
export interface userInfoReponseData extends ResponseData{
    data:{
        routes:string[],
        buttons:string[],
        roles:string[],
        name:string,
        avatar:string
    }
}

export interface TypeuserInfo {
    avatar?: string,
    routes?: string[],
    userId?: string,
    userName?: string
}


