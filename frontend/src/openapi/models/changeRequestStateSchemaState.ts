/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

export type ChangeRequestStateSchemaState =
    typeof ChangeRequestStateSchemaState[keyof typeof ChangeRequestStateSchemaState];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ChangeRequestStateSchemaState = {
    Draft: 'Draft',
    In_review: 'In review',
    Approved: 'Approved',
    Applied: 'Applied',
    Cancelled: 'Cancelled',
} as const;
