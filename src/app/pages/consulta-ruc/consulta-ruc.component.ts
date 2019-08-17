import { Component, OnInit } from '@angular/core';
import { ConsultaRucService } from 'src/app/common/services/consulta-ruc.service';
import { Ruc } from 'src/app/common/model/Ruc';
import { AuthenticationService } from 'src/app/common/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta-ruc',
  templateUrl: './consulta-ruc.component.html',
  styleUrls: ['./consulta-ruc.component.scss']
})
export class ConsultaRucComponent implements OnInit {

  title = 'Consulta de RUC';
  rucConsultado: string;
  ruc = new Ruc();
  showInfo = false;
  isLoading = false;
  labelButton: string;

  constructor(
    private consultaRucService: ConsultaRucService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.labelButton = 'Consultar';
  }


  consultarRuc() {
    this.isLoading = true;
    this.labelButton = 'Consultando';
    this.consultaRucService.consultaRuc(this.rucConsultado).subscribe((data) => {
      this.ruc = data;
      this.showInfo = true;
      this.isLoading = false;
      this.labelButton = 'Consultar';
      // console.log(this.ruc);
    });
  }

  nuevaBusqueda() {
    this.showInfo = false;
    this.rucConsultado = null;
  }

  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigateByUrl('/login');
  }

}
