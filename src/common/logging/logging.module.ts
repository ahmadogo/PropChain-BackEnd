import { Module, Global } from '@nestjs/common';
import { StructuredLoggerService } from './logger.service';

@Global() // This means you don't have to import it in every other file
@Module({
  providers: [StructuredLoggerService],
  exports: [StructuredLoggerService],
})
export class LoggingModule {}