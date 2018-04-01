import { User } from "../user.module";

export class AdminService {
    users: User[] = [
        new User('Max', 19),
        new User('Oksana', 40)
    ];
      
      
      
        getUsers(){
            return this.users;
        }

        addUser(user: User){
            this.users.push(user)
          }

          deleteUser(user: User){
              let i =this.users.indexOf(user);
              if(i > -1){
                this.users.splice(i, 1);
              }
          }

    }