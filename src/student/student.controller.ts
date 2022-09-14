import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateStudentDto, UpdateStudentDto } from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor (private readonly studentService: StudentService){}

    @Get()
    async getAllStudent(){
        return this.studentService.getAllStudent();
    }

    @Get(':id')
    async getOneStudent(@Param('id') id: number){
        return this.studentService.getAllStudent();
    }

    @Post()
    async CreateStudent(@Body() student: CreateStudentDto) {
        return this.studentService.createStudent();
    }

    @Put('id')
    async UpdateStudent(@Param('id') id: number, @Body() student: UpdateStudentDto){
        return this.studentService.updateStudent();
    }

    @Delete('id')
    async DeleteStudent(@Param('id') id: number){
        return this.studentService.deleteßStudent();
    }
}
