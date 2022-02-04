import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.page.html',
  styleUrls: ['./alterar-senha.page.scss'],
})
export class AlterarSenhaPage implements OnInit {

NovaSenha: String;
  usuarios:any = [];
  usuario: any;

  constructor( public usuarioService: UserService, public toastController: ToastController) { }

  ngOnInit() {
  }
  substituirSenha(){
    let cheack= false;
    this.usuario= localStorage.getItem("usuarioLogado");
    this.usuarios= localStorage.getItem("tbusuarios")
    for( let i=0; i<= this.usuarios.length; i++){
      if(this.usuarios[i]==this.usuario){
        this.usuarios[i].senha=this.NovaSenha;
        this.exibirMensagem();
        localStorage.setItem("tbusuarios", this.usuarios)
        cheack= true;
        break;
      }
    }
    if(cheack==false){
      this.exibirerro();
    }
    

  }
  async exibirMensagem(){
    const toast= await this.toastController.create({
      message: 'rodando!',
      duration: 1500
    });
    toast.present();
  }
  async exibirerro(){
    const toast= await this.toastController.create({
      message: 'erro!',
      duration: 1500
    });
    toast.present();

}
}
