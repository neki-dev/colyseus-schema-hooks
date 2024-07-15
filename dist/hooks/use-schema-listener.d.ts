import type { MapSchema, SetSchema } from "@colyseus/schema";
type Callbacks<T> = {
    onAdd?: (item: T) => void;
    onChange?: (item: T) => void;
    onRemove?: (item: T) => void;
};
export declare function useSchemaListener<T>(schema: MapSchema<T> | SetSchema<T>, callbacks: Callbacks<T>): void;
export {};
