import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Role, Status } from 'src/app/core/models/common.model';
import { User, UserList } from 'src/app/core/models/user.model';
import { UserRequestService } from 'src/app/core/services/request/user-request.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  constructor(private userService: UserService, private userRequestService: UserRequestService, private router: Router, private fb: FormBuilder) {}

  total: number | undefined;
  userList: UserList = { totalRecords: 0, data: [] };
  editing: boolean = false;
  userForm: any;
  userDetail: any;
  showModal: boolean = false;
  roles: Role[]= [];
  status: Status[]= [];
  selectedUser: any;

  ngOnInit(): void {
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
    this.userService.getListRole().subscribe(
      (data)=>{
        this.roles = data.data;
        console.log(this.roles);
      }
    )
    this.userService.getListStatus().subscribe(
      (data)=>{
        this.status = data.data;
        console.log(this.status);
      }
    )
    this.userForm = this.fb.group({
      id: [''],
      name: [''],
      email: [''],
      role: [],
      roleName:[],
      status: [],
      statusName: []
    });
  }
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  editUser(user: any){
    // console.log(this.userList.data);
    this.editing = true;
    // user.role = 1
    console.log(user);
    this.userForm.patchValue(user);
    this.userDetail = this.userList.data.find(u=>u.id===user.id);

    // console.log(this.roles.forEach(role=>console.log(role)));
    // this.userForm = this.fb.group({
    //   id: this.userDetail.id,
    //   name: [''],
    //   email: [''],
    //   role: [''],
    //   status: ['']
    // });
    console.log(this.userForm);

    // this.userForm = this.fb.group({
    //   id: this.userDetail.id,
    //   name: this.userDetail.name,
    //   role: this.userDetail.roleName,
    //   roleId: this.userDetail.roleId,
    //   email: this.userDetail.email,
    //   avatar: this.userDetail.avatar,
    //   status: this.userDetail.statusName,
    //   statusId: this.userDetail.statusId

    // })
    // console.log(this.userForm);
    // console.log(this.userDetail.roleId);
  }

  update(user:any){
    console.log(user);
    console.log(this.userForm);
    this.userRequestService.updateUser(this.userForm.value).subscribe(
      (data)=>{
        console.log(data);
      }
    )
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
      (data)=>{
        console.log(data);
      }
    )
  }
}
