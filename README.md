# bug-rspack

## Bug

```bash
bun install
bun run build # that works
bun run dockerize # that fails with a variable error

# As well, remove the css import from src/index.ts and
bun run dockerize # that fails with another error
```
