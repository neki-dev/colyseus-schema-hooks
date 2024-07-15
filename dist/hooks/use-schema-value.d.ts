import type { Schema } from "@colyseus/schema";
import type { NonFunctionPropNames } from "@colyseus/schema/lib/types/HelperTypes";
export declare function useSchemaValue<T extends Schema, K extends NonFunctionPropNames<T>>(schema: T, prop: K): T[K];
