import React, { FC } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import { RouterItem } from './router'
interface IRoutes {
  routes: RouterItem[]
}
//配置路由视图
const RouterView: FC<IRoutes> = ({ routes }) => {
  if(!routes) {
    return null;
  }
  const routers = routes.filter(item => item.component);
  const redirects = routes.filter(item => !item.component);
  return (<Switch>
    {
      routers.map((item, index) => {
        return <Route key={index} path={item.path} render={routerProps => {
          if(item.children) {
            return <item.component { ...routerProps } routes={item.children} />
          }
          return <item.component { ...routerProps } />
        }} />
      })
    }
    {
      redirects.map((item, index) => {
        return <Redirect key={index} from={item.from} to={(item.to as string)}/>
      })
    }
  </Switch>);
}
export default RouterView;
