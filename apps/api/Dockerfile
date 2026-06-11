FROM oven/bun:1.3.10 AS deps
WORKDIR /app

COPY package.json bun.lock turbo.json ./
COPY apps/api/package.json ./apps/api/

RUN bun install

FROM deps AS build
COPY apps/api ./apps/api
RUN bun build apps/api/src/index.ts --target bun --outfile dist/server.js

FROM oven/bun:1-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/dist/server.js ./server.js
COPY --from=build /app/apps/api/public ./public
EXPOSE 3000
CMD ["bun", "run", "server.js"]
