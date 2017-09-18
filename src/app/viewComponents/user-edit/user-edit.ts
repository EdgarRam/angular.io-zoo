import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router'

import { User } from '../../models/user'
import { GLOBAL } from '../../services/global'
import { UserService } from '../../services/user-srv'
import { UploadSrv } from '../../services/upload-srv'


@Component({
    selector: 'user-edit',
    templateUrl: './user-edit.pug',
    providers: [
        UserService,
        UploadSrv
    ]
})

export class UserEditComponent implements OnInit{
    public title: String
    public user: User
    public identity
    public token
    public status
    public url: string

    constructor(
        private _userService: UserService,
        private _uploadSrv: UploadSrv
    ){
        this.title = 'Editar usuario'
        this.identity = this._userService.getIdentity()
        this.token = this._userService.getToken()
        this.user = this.identity
        this.url = GLOBAL.url
    }


    ngOnInit(){
    }

    onSubmit(){
        this._userService.updateUser( this.user )
        .subscribe(
            response =>{
                if( !response.user ){
                    this.status = 'error'
                }
                else{
                    this.status = 'success'
                    localStorage.setItem('identity', JSON.stringify( this.user ) )

                    // upload img
                    this._uploadSrv.makeFileRequest(
                        this.url + '/upload-image-user/' + this.user._id ,
                        [],
                        this.filesToUpload,
                        this.token,
                        'image'
                    )
                        .then(
                            (response: any) =>{
                                this.user.image = response.image;
                                localStorage.setItem('identity', JSON.stringify( this.user ) )
                                console.log( this.user )
                            }
                        )
                }
            },
            error =>{
                var errorMessage = <any> error
                if( errorMessage ){
                    this.status = 'error'
                }
            }
        )
    }

    public filesToUpload: Array<File>
    fileChangeEvent( fileInput: any ){
        this.filesToUpload = <Array<File>>fileInput.target.files
    }

}
