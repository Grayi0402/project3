export class Account{
	public username : string;
	public password : string;
	public phone : number;
	constructor(username:string, password:string, phone:number){
		this.username = username;
		this.password = password;
		this.phone = phone; 
	}
}