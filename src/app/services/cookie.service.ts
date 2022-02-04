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
  criarcookies( ){
    let conquistas  = [
      { id: 0, nome: 'Negreskito', desc: 'Um cookie de chocolate com recheio de baunilha, seu primeiro amigo', multiplicador: 1, status: "lock-open", img: "./assets/cookie-negresco.png" },
      { id: 1, nome: 'gotinha', desc: 'Um cookie de gotas de chocolate, você pode obter com pontuação igual a 1000', multiplicador:2, status: "lock-closed", img: "./assets/gotinha.png"  },
      { id: 2, nome: 'coração', desc: 'Um belo biscoito de coração adquirido aos 5000 pontos', multiplicador:5, status: "lock-closed",  img: "./assets/cute-cookie.png"  },
      
    ];

    localStorage.setItem('tbConquistas', JSON.stringify(conquistas));
  }

}
