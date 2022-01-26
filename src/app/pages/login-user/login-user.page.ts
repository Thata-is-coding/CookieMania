import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, ToastController } from '@ionic/angular';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.page.html',
  styleUrls: ['./login-user.page.scss'],
})
export class LoginUserPage implements OnInit {

  usuarios: any = [];
  usuario = {
    id: null,
    nome: null,
    email: null,
    senha: null
  };
  email: string;
  senha: string;

  constructor(public toastController: ToastController, public navController: NavController, public usuarioService:UserService, private menuCtrl: MenuController) { 
    localStorage.setItem('usuarioLogado', null);
  }

  ngOnInit() {
    if(this.usuarioService.listar().length === 0){
      this.usuario.nome = "admin"
      this.usuario.email = "admin@admin.com"
      this.usuario.senha = "admin"
      this.usuarioService.salvar(this.usuario);
    };
  }

  fazerLogin (email: string, senha: string){
    if (this.usuarioService.buscarPorEmail(email) != null){
      if(this.usuarioService.buscarPorEmail(email).senha === senha){
        localStorage.setItem('usuarioLogado', this.usuarioService.buscarPorEmail(email).id);
        this.menuCtrl.enable(true);
        this.navController.navigateBack('/main');
      }else{
        this.erroLogin("Senha incorreta! Informe novamente.");
      }
    }else{
      this.erroLogin("O e-mail inserido não consta nos nossos registros.");
    }
  }

  async erroLogin(mensagem:string){
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 1500
    });
    toast.present();
  }

  async ionViewWillEnter(){
    this.menuCtrl.enable(false);
  }

}