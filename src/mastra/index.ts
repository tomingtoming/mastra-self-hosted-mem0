
import { Mastra } from '@mastra/core';
import { mem0agent } from './agents';
import { createLogger } from '@mastra/core/logger';

export const mastra = new Mastra({
    agents: { mem0agent },
    logger: createLogger({
        level: 'debug',
    })
})
