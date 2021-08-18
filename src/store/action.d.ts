//类型判断
export interface State{
    list:HomeList[],
    children:HomeChild[],
    gou:HomeChild[],
    flag:boolean,
    f:[]
}
export interface HomeList{
    [x: string]: any;
    title: ReactNode;
    like: any;
    name:string;
    string:any,
    id:number,
    img:string,
    collect:boolean,
    children:HomeChild[]
    flag:boolean,
}
export interface HomeChild{
    id:number,
    title:string,
    price:number,
    content:string,
    img:string,
    num:number,
    flag:boolean
}
export interface HomeAction{
    name:string,
    any:any;
    id: number;
    falg: any;
    type:string,
    list:HomeList[],
    item:HomeChild[],
    index:number,
    flag:boolean,
    a:string
}
