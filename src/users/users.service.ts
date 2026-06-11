import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';

@Injectable()
export class UsersService {
    private users = [
        {
            "id":1,
            "name": "Emmanuel Tol",
            "email": "emmanuel@gmail.com",
            "role": "INTERN"
        },
        {
            "id":2,
            "name": "Alvin Amm",
            "email": "alvin@gmail.com",
            "role": "INTERN"
        },
        {
            "id":3,
            "name": "Sharnell J",
            "email": "sharnell@gmail.com",
            "role": "ENGINEER"
        },
        {
            "id":4,
            "name": "Vicky Vic",
            "email": "vic@gmail.com",
            "role": "ENGINEER"
        },
        {
            "id":5,
            "name": "Clementine Bauch",
            "email": "clementine@gmail.com",
            "role": "ADMIN"
        }
        
    ]

    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN' ){
        if (role){
            return this.users.filter(user => user.role === role)
        }
        return this.users
    }

    findOne(id: number){
        const user = this.users.find(user =>user.id === id)

        return user
    }

    create(createUserDto: CreateUserDto) {
        const userByHighestId = [...this.users].sort((a,b) => b.id - a.id)
        const newUser = {
            id: userByHighestId[0].id + 1,
            ...createUserDto //replaces the 'user' just like in the users.controllers file
        }
        this.users.push(newUser)
        return newUser
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        this.users = this.users.map(user => {
            if( user.id === id) {
                return { ...user, ...updateUserDto}
            }
            return user
        })
        return this.findOne(id)
    }

    delete(id: number) {
        const removedUser = this.users.filter(user => user.id != id)
        return removedUser
    }

}

 