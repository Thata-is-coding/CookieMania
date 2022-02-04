import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  salvar (usuario:any){
    let usuarios= JSON.parse(localStorage.getItem('tbUsuarios'));
    if(usuario.id){
      let posicao = usuarios.findIndex(u => u.id == usuario.id);
      usuarios[posicao]= usuario;
    }else{
      usuario.id= new Date().getTime();
      usuarios.push(usuario);
    }
    localStorage.setItem('tbUsuarios', JSON.stringify(usuarios));
  }

  exclui(usuario:any){
    let usuarios= JSON.parse(localStorage.getItem('tbusuarios'));
    usuarios = usuarios.filter(u => u.id != usuario.id);
    localStorage.setItem('tbUsuarios',JSON.stringify(usuarios));
  }

  listar(){
    let usuarios= JSON.parse(localStorage.getItem('tbUsuarios'));
    if(!usuarios){
      usuarios=[];
      localStorage.setItem('tbUsuarios', JSON.stringify(usuarios));
    }
    return usuarios;
  }
  
  buscarPorId (id: number){
    let usuarios= JSON.parse(localStorage.getItem('tbUsuarios'));
    let usuario= usuarios.find(c => c.id == id);
    return usuario;
  }
  
  buscarPorEmail (email:string){
    let usuarios= JSON.parse(localStorage.getItem('tbUsuarios'));
    let usuario= usuarios.find(u => u.email === email);
    return usuario;
  }
}