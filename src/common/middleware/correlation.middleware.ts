import { Injectable, NestMiddleware } from '@nestjs/common';
import { AsyncLocalStorage } from 'async_hooks';
import { randomUUID } from 'crypto';

export const asyncLocalStorage = new AsyncLocalStorage<Map<string, string>>();

@Injectable()
export class CorrelationMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const store = new Map<string, string>();
    const correlationId = req.headers['x-request-id'] || randomUUID();

    store.set('correlationId', correlationId);

    asyncLocalStorage.run(store, () => {
      next();
    });
  }
}
