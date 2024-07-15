## ⚡ Colyseus Schema Hooks
[![Version](https://badgen.net/npm/v/colyseus-schema-hooks)](https://npmjs.com/package/colyseus-schema-hooks)
[![Small size](https://img.badgesize.io/neki-dev/colyseus-schema-hooks/main/dist/index.js)](https://github.com/neki-dev/colyseus-schema-hooks/blob/main/dist/index.js)
[![Build](https://github.com/neki-dev/colyseus-schema-hooks/actions/workflows/build.yml/badge.svg)](https://github.com/neki-dev/colyseus-schema-hooks/actions/workflows/build.yml)

React hooks for [@colyseus/schema](https://github.com/colyseus/schema)

.


## Install

```sh
npm i colyseus-schema-hooks
```

.

## Hooks

#### Get actual value of Schema property
```ts
const value = useSchemaValue(schema, prop);
```

#### Subscribe to updates of Map/Set Schema
```ts
useSchemaListener(schema, {
  onAdd: (item) => {},
  onChange: (item) => {},
  onRemove: (item) => {},
}, [depends]);
```
