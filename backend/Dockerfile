FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app
COPY package*.json pnpm-lock.yaml ./

FROM base AS deps
RUN pnpm install --frozen-lockfile

FROM deps AS build
COPY . .
RUN npx prisma generate
RUN pnpm run build

FROM node:20-slim AS runner
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json /app/pnpm-lock.yaml ./
COPY --from=build /app/prisma ./prisma

EXPOSE 3001
CMD ["npm", "run", "start"]
