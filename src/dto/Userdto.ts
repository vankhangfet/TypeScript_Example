export default class UserDTO{

   public username: string;
   public email: string;

    constructor(username: string, email: string) {
      this.username = username;
      this.email = email;
    }
}