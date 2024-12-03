FROM oven/bun:alpine AS build-client
WORKDIR /app
COPY package.json bun.lockb .
RUN bun install
COPY . .
RUN bun run build