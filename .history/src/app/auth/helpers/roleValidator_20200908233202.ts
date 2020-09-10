import { User } from 'src/app/auth/models/user.interface';

export class RoleValidator {
    isUser(user): boolean {
        return user.role === 'USER';
    }

    isAdmin(user): boolean {
        return user.role === 'ADMIN';
    }
}
