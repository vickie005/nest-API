import { Injectable } from '@nestjs/common';

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

    create(user: {name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN'}) {
        const userByHighestId = [...this.users].sort((a,b) => b.id - a.id)
        const newUser = {
            id: userByHighestId[0].id + 1,
            ...user
        }
        this.users.push(newUser)
        return newUser
    }

    update(id: number, updateUser: {name?: string, email?: string, role?: 'INTERN' | 'ENGINEER' | 'ADMIN'}) {
        this.users = this.users.map(user => {
            if( user.id === id) {
                return { ...user, ...updateUser}
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

 