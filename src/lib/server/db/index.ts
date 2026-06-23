import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from './schema';
// import { DATABASE_URL } from '$app/env/private';

if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

const client = neon(process.env.DATABASE_URL);

export const db = drizzle(client, { schema });
