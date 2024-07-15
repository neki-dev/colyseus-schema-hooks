import { useEffect } from "react";

import type { MapSchema, SetSchema } from "@colyseus/schema";

type Callbacks<T> = {
  onAdd?: (item: T, key: string) => void;
  onChange?: (item: T, key: string) => void;
  onRemove?: (item: T, key: string) => void;
};

export function useSchemaListener<T>(
  schema: MapSchema<T> | SetSchema<T>,
  { onAdd, onChange, onRemove }: Callbacks<T>,
  depends: any[] = []
) {
  useEffect(() => {
    const unlistenAdd = onAdd && schema.onAdd(onAdd);
    const unlistenChange = onChange && schema.onChange(onChange);
    const unlistenRemove = onRemove && schema.onRemove(onRemove);

    return () => {
      unlistenAdd?.();
      unlistenChange?.();
      unlistenRemove?.();
    };
  }, [schema, ...depends]);
}
