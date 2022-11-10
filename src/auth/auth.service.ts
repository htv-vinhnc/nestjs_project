import { LoginInput } from './dto/login.input';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {};

  login(input: LoginInput) {
    const payload = {
        email: input.email,
        password: input.password,
    }
    const token = this.jwtService.sign(
        payload,
        {
            secret: 'JWT_SECRET_KEY'
        }
        );
    
    return token;
  }
}