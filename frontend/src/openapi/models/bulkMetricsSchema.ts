/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { BulkRegistrationSchema } from './bulkRegistrationSchema';
import type { ClientMetricsEnvSchema } from './clientMetricsEnvSchema';

export interface BulkMetricsSchema {
    applications?: BulkRegistrationSchema[];
    metrics?: ClientMetricsEnvSchema[];
}
