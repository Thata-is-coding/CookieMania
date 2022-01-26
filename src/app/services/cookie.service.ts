import { Injectable } from '@angular/core';
import { ConquistaService } from './conquista.service';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor( public conquistaService: ConquistaService ) { }

  salvar (cookie:any){
    let cookies= JSON.parse(localStorage.getItem('arrayCookies'));

    cookie.id = cookies.length;

    if (cookie.id == 2){
      this.conquistaService.atualizar(2);
    }

    cookies.push(cookie);
    localStorage.setItem('arrayCookies', JSON.stringify(cookies));
  }

  vender(cookie:any){
    let cookies= JSON.parse(localStorage.getItem('arrayCookies'));
    cookies = cookies.filter(u => u.id != cookie.id);
    localStorage.setItem('arrayCookies',JSON.stringify(cookies));
  }

  listar(){
    let cookies= JSON.parse(localStorage.getItem('arrayCookies'));
    if(!cookies){
      cookies=[];
      localStorage.setItem('arrayCookies', JSON.stringify(cookies));
    }
    return cookies;
  }
  
  buscarPorId (id: number){
    let cookies= JSON.parse(localStorage.getItem('arrayCookies'));
    let cookie= cookies.find(u => u.id === id);
    return cookie;
  }
  
  buscarPorNome (nome:string){
    let cookies= JSON.parse(localStorage.getItem('arrayCookies'));
    let cookie= cookies.find(u => u.nome === nome);
    return cookie;
  }

  alternarCookie (id: number){
    let cookies= JSON.parse(localStorage.getItem('arrayCookies'));
    let cookie= cookies.find(u => u.id === id);

    localStorage.setItem('cookieAtivo', JSON.stringify(cookie));
  }
}
