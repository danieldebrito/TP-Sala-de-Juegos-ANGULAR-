import { User } from 'src/app/class/user';

export class RoleValidator {
    isAlumno(user: User): boolean {
        return user.role === 'ALUMNO';
    }

    isProfesor(user): boolean {
        return user.role === 'PROFESOR';
    }

    isAdmin(user): boolean {
        return user.role === 'ADMIN';
    }
}
