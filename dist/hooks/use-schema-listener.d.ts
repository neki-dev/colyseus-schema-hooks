import type { MapSchema, SetSchema } from "@colyseus/schema";
type Callbacks<T> = {
    onAdd?: (item: T, key: string) => void;
    onChange?: (item: T, key: string) => void;
    onRemove?: (item: T, key: string) => void;
};
export declare function useSchemaListener<T>(schema: MapSchema<T> | SetSchema<T>, { onAdd, onChange, onRemove }: Callbacks<T>, depends?: any[]): void;
export {};
