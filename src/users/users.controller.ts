import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService){}
    /* 
    creates an instance of the usersService. Again, if it was created elsewhere, another instance, it pulls it in coz nestjs identifies that it's a singleton. if we were to create it without the nestjs benefit, we would have:
    -> const usersService = new UsersService()
    but nest is handling this for us and actually doing more than that. It's saying "Hey, if we created this elsewhere, it's going to find it and pull it in"
    */ 
    

    @Get( ) //GET /users (or users?role=value) -> query parameter (optional)
    findAll(@Query('role')role?:'INTERN' | 'ENGINEER' | 'ADMIN') {
        return this.usersService.findAll(role)
    }

    @Get(':id') // GET /users/:id
    findOne(@Param('id')id: string) {
    return this.usersService.findOne(+id) // Unary plus(+) -> An easy way to convert something into a number (the id is passed in as a string and needs to be converted into a number)
    }

    /**
     * @Get('interns') //Get /users/interns
     * findAllInterns() {
     *  return[]
     *   }
     * //when you go to localhost:3000 with to the GET function with the param of 'interns' below the get by id function, it will return the intern as the id, hence if you need to get another route with the id, it should be placed on top of the get by id param.. so yes, the order does matter.
     */
    
    @Post() //POST /users
    create(@Body()user: {name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN'}) {
        return this.usersService.create(user)

    }

    @Patch(':id') // PATCH /users/:id
    update(@Param('id')id: string, @Body() userUpdate: {name?: string, email?: string, role?: 'INTERN' | 'ENGINEER' | 'ADMIN'}) {
    return this.usersService.update(+id, userUpdate)
    }

    @Delete(':id') // DELETE /users/:id
    delete(@Param('id')id: string) {
    return this.usersService.delete(+id)
    }


}

