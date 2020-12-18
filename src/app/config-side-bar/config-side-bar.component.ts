import { Component, Input, OnInit } from '@angular/core';
import { user } from '../models/user';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiUsersService } from '../services/api-users.service'

@Component({
  selector: 'app-config-side-bar',
  templateUrl: './config-side-bar.component.html',
  styleUrls: ['./config-side-bar.component.css']
})
export class ConfigSideBarComponent implements OnInit {

  @Input() user: user
  saveForm = new FormGroup({
    _nom: new FormControl(),
    _prenom: new FormControl(),
    _nombreEnfants: new FormControl({ value: '', disabled: true }),
  })

  constructor(private ApiUsersService: ApiUsersService) { }

  ngOnInit(): void { }

  ngOnChanges() {
    this.saveForm.setValue({
      _nom: this.user._nom,
      _prenom: this.user._prenom,
      _nombreEnfants: this.user._nombre_enfants
    })
  }

  onSubmit(id) {
    const user = {
      _nom: this.saveForm.value._nom,
      _prenom: this.saveForm.value._prenom,
      _nombre_enfants: this.user._nombre_enfants
    }
    this.ApiUsersService.update(id, user).subscribe()
  }

}
