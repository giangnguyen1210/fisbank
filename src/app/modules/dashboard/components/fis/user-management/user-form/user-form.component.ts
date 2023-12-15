import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Role, Status } from 'src/app/core/models/common.model';
import { UserList } from 'src/app/core/models/user.model';
import { UserRequestService } from 'src/app/core/services/request/user-request.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm: any;

  total: number | undefined;
  userList: UserList = { totalRecords: 0, data: [] };
  editing: boolean = false;
  userDetail: any;
  showModal: boolean = false;
  showModalUpdate: boolean = false;
  roles: Role[]= [];
  status: Status[]= [];
  selectedUser: any;
  constructor(private userService: UserService, private userRequestService: UserRequestService, private fb: FormBuilder) {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.userService.getListRole().subscribe(
      (data)=>{
        console.log(data);
        this.roles = data.data;
        console.log(this.roles);
      }
    )
    this.initUserForm();
    this.getService();
  }
  getService(){
    this.userService.getUserList().subscribe(
      (data) => {
        console.log('API Response:', data);
        this.total=data.totalRecords;
        // console.log(this.total);
        this.userList = data;
        console.log(this.userList.data);
      },
      (error) => {
        console.error('API Error:', error);
      }
    );
  }

  editUser(user: any){
    this.editing = true;
    // user.role = 1
    console.log(user);
    this.userForm.patchValue(user);
    this.userDetail = this.userList.data.find(u=>u.id===user.id);
    console.log(this.userForm);
  }

  update(user:any){
    this.userDetail = this.userList.data.find(u=>u.id===user.id);

    
    this.userForm.patchValue(user);
    console.log(this.userForm);
    this.editing = false;
    this.userRequestService.updateUser(this.userForm.value).subscribe(
      (data)=>{
        console.log(data);
      }
    )
    this.getService();
  }
  initUserForm(){
    this.userForm = this.fb.group({
      name: [],
      email: [],
      roleId: [],
      password: ['123456']
    })
  }
  onSubmit(){
    const json = {
      ...this.userForm.value,
    };
    this.userRequestService.createUser(json).subscribe(
      (data)=>{
        console.log(data);
      }
    )
    this.getService();
  }

  cancel(){
    this.editing = false;
  }

  delete(user: any){
    this.showModal = true;
    console.log("hello");
    console.log(user);
    this.selectedUser = user;
  }

  cancelDelete(): void {
    this.showModal = false;
  }

  confirmDelete(user:any){
    this.userRequestService.deleteUser(user).subscribe(
      (response)=>{
        window.location.reload();
      }
    )
    this.showModal = false;
  }
}
