export class Usuario {
    constructor(
        public google: boolean,
        public nombre: string,
        public email: string,
        public img: string,
        public password?: string,
        public id?: string,
        public role?: string,
    ) { }
}