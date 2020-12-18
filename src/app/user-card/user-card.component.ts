import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { user } from '../models/user';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiUsersService } from '../services/api-users.service'
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user: user
  @Output() openSideBar = new EventEmitter<user>()

  saveForm = new FormGroup({
    _nom: new FormControl({ value: '', disabled: true }),
    _prenom: new FormControl({ value: '', disabled: true }),
    _nombreEnfants: new FormControl(),
  })

  constructor(private ApiUsersService: ApiUsersService) { }

  ngOnInit(): void {
    this.saveForm.setValue({
      _nom: this.user._nom,
      _prenom: this.user._prenom,
      _nombreEnfants: this.user._nombre_enfants,
    })
  }

  onSubmit(id: number) {
    const user = {
      _nom: this.user._nom,
      _prenom: this.user._prenom,
      _nombre_enfants: this.saveForm.value._nombreEnfants
    }
    this.ApiUsersService.update(id, user).subscribe()
  }


  onDelete(id: number) {
    this.ApiUsersService.delete(id).subscribe()
  }



}
