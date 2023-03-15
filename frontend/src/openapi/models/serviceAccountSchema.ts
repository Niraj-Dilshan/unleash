/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { PatSchema } from './patSchema';

export interface ServiceAccountSchema {
    id: number;
    isAPI?: boolean;
    name?: string;
    email?: string;
    username?: string;
    imageUrl?: string;
    inviteLink?: string;
    loginAttempts?: number;
    emailSent?: boolean;
    rootRole?: number;
    seenAt?: string | null;
    createdAt?: string;
    tokens?: PatSchema[];
}
