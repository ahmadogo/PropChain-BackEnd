import { User as PrismaUser, UserRole } from '@prisma/client';

export { UserRole };

export class User implements PrismaUser {
  id: string;
  email: string;
  password: string;
  firstName: string | null;
  lastName: string | null;
  walletAddress: string | null;
  isVerified: boolean;
  roleId: string | null;
  createdAt: Date;
  updatedAt: Date;
  
  // FIX: Removed '?' to make this property required, matching the PrismaUser interface
  role: UserRole; 
}

export type CreateUserInput = {
  email: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  walletAddress?: string;
  role?: UserRole;
  roleId?: string;
};

export type UpdateUserInput = Partial<CreateUserInput>;