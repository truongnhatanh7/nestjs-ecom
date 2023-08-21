import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    console.log('Guard run');
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    // const request = context.switchToHttp().getRequest();
    // const user = request.user;
    return this.matchRoles(roles, 'admin');
  }

  matchRoles(currentRole: string[], allowedRole: string): boolean {
    for (const role of currentRole) {
      if (role != allowedRole) {
        return false;
      }
    }
    return true;
  }
}
