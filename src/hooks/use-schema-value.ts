import { useEffect, useState } from "react";

import type { Schema } from "@colyseus/schema";
import { PropOf } from "../types";

export function useSchemaValue<
  T extends Schema,
  K extends PropOf<T>
>(schema: T, prop: K) {
  const [value, setValue] = useState(schema[prop]);

  useEffect(() => {
    const unlisten = schema.listen(prop, setValue);

    return () => {
      unlisten();
    };
  }, [schema, prop]);

  return value;
}
