import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from './services/auth.service';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [UsersModule,PassportModule],
  providers: [AuthService,LocalStrategy],
})
export class AuthModule {}
