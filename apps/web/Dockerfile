FROM oven/bun:1.3.10 AS deps
WORKDIR /app

COPY package.json bun.lock turbo.json ./
COPY apps/web/package.json ./apps/web/
COPY packages/typescript-config/package.json ./packages/typescript-config/

RUN bun install

FROM deps AS build
COPY apps/web ./apps/web
COPY packages/typescript-config ./packages/typescript-config
RUN bun run turbo build --filter=web

FROM nginx:alpine AS runner
COPY --from=build /app/apps/web/dist /usr/share/nginx/html
COPY apps/web/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
