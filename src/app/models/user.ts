export class User{
    constructor(
        public _id: string,
        public name: string,
        public surname: string,
        public email: string,
        public password: string,
        public role: string,
        public image: string
    ){
    }


    // nos ahorramos este codigo
    // publci name: string;
    // constructor( name ){
    //     this.name = name;
    // }
}
