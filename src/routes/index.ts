import React from "react";
import Login from "../pages/Login";
import Event from "../pages/Event";

export interface IRoute{
    path:string;
    component: React.ComponentType;
    index?:boolean;
}

export enum RouteName{
    LOGIN='/login',
    EVENT='/'
}
export const publicRoutes:IRoute[] = [
    {path:RouteName.LOGIN, index:true, component:Login}
]

export const privateRoutes:IRoute[] = [
    {path:RouteName.EVENT, index:true, component:Event}
]