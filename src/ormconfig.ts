import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: Number(process.env.DATABASE_PORT) || 5432,
  username: process.env.DATABASE_USER || 'nestuser',
  password: process.env.DATABASE_PASSWORD || 'nestpass',
  database: process.env.DATABASE_NAME || 'nestdb',
  autoLoadEntities: true,
  synchronize: true, // use only in dev
};

export default config;
