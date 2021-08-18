export interface RouterItem {//路由ts规范
    path?: string,
    from?: string,
    to?: string,
    component?: any,
    children?: RouterItem[]
  }
  