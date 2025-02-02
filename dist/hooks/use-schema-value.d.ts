import type { Schema } from "@colyseus/schema";
import { PropOf } from "../types";
export declare function useSchemaValue<T extends Schema, K extends PropOf<T>>(schema: T, prop: K): T[K];
