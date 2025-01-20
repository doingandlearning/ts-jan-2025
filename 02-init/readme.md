```
npm init
```

- Adding package.json

```bash
npm install -D typescript
```

- Updates package.json
- Adding package-lock.json
- Adds and updates node_modules

```bash
npx tsc --init
```

```
npm i -D tsx
```

Update the scripts:

```json
  "scripts": {
    "build": "tsc",
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node dist/app.js",
    "dev": "tsx --watch src/app.ts"
  },
```
