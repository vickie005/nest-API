import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get( ) //GET /users (or users?role=value) -> query parameter (optional)
    findAll(@Query('role')role?:'INTERN' | 'ENGINEER' | 'ADMIN') {
        return[]
    }

    @Get(':id') // GET /users/:id
    findOne(@Param('id')id: string) {
    return {id}
    }

    /**
     * @Get('interns') //Get /users/interns
     * findAllInterns() {
     *  return[]
     *   }
     * //when you go to localhost:3000 with to the GET function with the param of 'interns' below the get by id function, it will return the intern as the id, hence if you need to get another route with the id, it should be placed on top of the get by id param.. so yes, the order does matter.
     */
    
    @Post() //POST /users
    create(@Body()user: {}) {
        return user

    }

    @Patch(':id') // PATCH /users/:id
    update(@Param('id')id: string, @Body() userUpdate: {}) {
    return {id, ...userUpdate}
    }

    @Delete(':id') // DELETE /users/:id
    elete(@Param('id')id: string) {
    return {id}
    }


}
