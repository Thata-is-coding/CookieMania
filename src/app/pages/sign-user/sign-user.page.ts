import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-user',
  templateUrl: './sign-user.page.html',
  styleUrls: ['./sign-user.page.scss'],
})
export class SignUserPage implements OnInit {

  id:string;
  usuarios: any = [];
  usuario = {
    id: null,
    nome: null,
    email: null,
    senha: null,
    country: null
  };

  public formGroup: FormGroup;
  isSubmitted = false;

  constructor(public toastController: ToastController, public navController: NavController, public usuarioService:UserService, 
    private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) { 

    this.formGroup = this.formBuilder.group({
      'nome':['', Validators.compose([
        Validators.required,
        Validators.maxLength(60)
        ])],
      'email':['', Validators.compose([
      Validators.required,
      Validators.email
      ])],
      'senha':['', Validators.compose([
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,20}/)
      ])],
      'country':['', Validators.compose([
      Validators.required
      ])],
    })  
  }

  ngOnInit() {
  }

  get errorControl(){
    return this.formGroup.controls;
  }

  async submitForm(){
    this.isSubmitted = true;
    if (this.formGroup.valid) {
      if(this.usuarioService.buscarPorEmail(this.formGroup.value.email) === undefined){
        this.usuario.email = this.formGroup.value.email;
        this.usuario.nome = this.formGroup.value.nome;
        this.usuario.senha = this.formGroup.value.senha;
        this.usuario.country = this.formGroup.value.country;
        this.usuario.id = this.id;
        this.usuarioService.salvar(this.usuario); 
        this.exibirMensagem('Usuário cadastrado com sucesso!!!');
        this.navController.navigateBack('/login-user');
      }else{
        this.exibirMensagem('O e-mail informado já se encontra cadastrado em nossos registros.')
      }
    } else {
      this.exibirMensagem('Por favor, informe os dados necessários!')
    }
  }

  async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 1500
    });
    toast.present();
  }

}