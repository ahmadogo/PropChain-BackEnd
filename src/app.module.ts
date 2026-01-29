import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { ScheduleModule } from '@nestjs/schedule';
import { TerminusModule } from '@nestjs/terminus';
import { BullModule } from '@nestjs/bull';

// Core & Database
import { PrismaModule } from './database/prisma/prisma.module';
import { HealthModule } from './health/health.module';
import { ConfigurationModule } from './config/configuration.module';
import configuration from './config/configuration';

// --- OUR NEW LOGGING ---
import { LoggingModule } from './common/logging/logging.module';
import { LoggingMiddleware } from './common/logging/logging.middleware';

// Business Modules
import { PropertiesModule } from './properties/properties.module';
import { UsersModule } from './users/users.module';
import { TransactionsModule } from './transactions/transactions.module';
import { BlockchainModule } from './blockchain/blockchain.module';
import { AuthModule } from './auth/auth.module';
import { FilesModule } from './files/files.module';
import { ApiKeysModule } from './api-keys/api-keys.module';
import { DocumentsModule } from './documents/documents.module'; // Added missing import

// Middleware
import { AuthRateLimitMiddleware } from './auth/middleware/auth.middleware';

@Module({
  imports: [
    // Configuration
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: ['.env.local', '.env.development', '.env'],
    }),
    ConfigurationModule,

    // Core modules
    LoggingModule, // Changed to our new LoggingModule
    PrismaModule,
    HealthModule,

    // Security and rate limiting
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => [
        {
          ttl: configService.get<number>('THROTTLE_TTL', 60),
          limit: configService.get<number>('THROTTLE_LIMIT', 10),
        },
      ],
      inject: [ConfigService],
    }),

    // Background jobs
    BullModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        redis: {
          host: configService.get<string>('REDIS_HOST', 'localhost'),
          port: configService.get<number>('REDIS_PORT', 6379),
          password: configService.get<string>('REDIS_PASSWORD'),
          db: configService.get<number>('REDIS_DB', 0),
        },
        defaultJobOptions: {
          removeOnComplete: 10,
          removeOnFail: 5,
          attempts: 3,
          backoff: {
            type: 'exponential',
            delay: 2000,
          },
        },
      }),
      inject: [ConfigService],
    }),

    ScheduleModule.forRoot(),
    TerminusModule,

    // Business modules
    AuthModule,
    ApiKeysModule,
    UsersModule,
    PropertiesModule,
    TransactionsModule,
    BlockchainModule,
    FilesModule,
    DocumentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      // 1. Apply our new Correlation ID Logging to EVERY route
      .apply(LoggingMiddleware)
      .forRoutes('*')
      // 2. Keep your existing Auth Rate Limiting
      .apply(AuthRateLimitMiddleware)
      .forRoutes('/auth*');
  }
}