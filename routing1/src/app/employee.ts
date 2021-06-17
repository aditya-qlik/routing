export interface IEmployee {
    id : number,
    name: string,
    username: string,
    email:string,
    address:{
        street:string,
        city:string,
        geo:{
            lat:any,
            lng:any
        }
    }
    phone: any
}