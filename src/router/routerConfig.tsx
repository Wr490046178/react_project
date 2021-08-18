//配置路由页面
import Index from '../Views'//一级路由
import Del from '../Views/Del/Del'//一级路由
import Login from '../Views/Login/Login'//一级路由

//index文件下二级路由
import Home from '../Views/index/Home/Home'
import Shop from '../Views/index/Shop/Shop'
import List from '../Views/index/List/List'
import Audit from '../Views/index/Audit/Audit'
import OperationRet from '../Views/index/OperationResults/OerationRet'
import System from '../Views/index/System/System'
import OnlineHelp from '../Views/index/OnlineHelp/OnlineHelp'
//Home文件下三级路由
import Modeloperation from '../Views/index/Home/Modeloperation/Modeloperation'

const routes = [
    {
        from: '/',//路由重定向
        to: '/login'
    },
    {
        path: '/del/:id',
        component: Del,

    }, {
        path: '/login',
        component: Login,
    },
    {
        path: '/index',
        component: Index,
        children: [//子路由
            {
                from: '/index',
                to: '/index/home'
            },
            {
                path: '/index/home',
                component: Home,
                children:[
                    {
                        path:'/index/home/modeloperation',
                        component:Modeloperation,
                    }
                ]

            },
            {
                path: '/index/list',
                component: List,
            },
            
            {
                path: '/index/shop',
                component: Shop,
            },
            {
                path: '/index/audit',
                component:Audit,
            },
            {
                path: '/index/operationRet',
                component: OperationRet,
            },
            {
                path: '/index/system',
                component:System,
            },
            {
                path: '/index/onlineHelp',
                component:OnlineHelp,
            },
         
        ]
    }
]
export default routes