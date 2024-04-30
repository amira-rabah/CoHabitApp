import { HttpInterceptorFn } from '@angular/common/http';

export const userInterceptor: HttpInterceptorFn = (req, next) => {
  const JWT_TOKEN=getJwtToken()
  if (JWT_TOKEN){
    req.clone({
      setHeaders:{
        Authorization:`Bearer ${JWT_TOKEN}`
      }
    })
  }
  return next(req);
};

function getJwtToken ( ):string |null{
  return localStorage.getItem('JWT_TOKEN');
}
