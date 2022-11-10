import { JwtService } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
  controllers: [StudentController],
  providers: [StudentService, JwtService]
})
export class StudentModule {}
