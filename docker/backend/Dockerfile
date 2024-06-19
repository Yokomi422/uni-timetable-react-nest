FROM node:lts AS builder

WORKDIR /app

COPY ./../../backend/package.json ./../../backend/pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install

COPY ./../../backend/src ./src
COPY ./../../backend/tsconfig.json ./
COPY ./../../backend/.env ./
COPY ./../../backend/prisma ./prisma
COPY ./../../backend/tsconfig.build.json ./

RUN pnpm run build

FROM node:lts

WORKDIR /app


COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

CMD ["pnpm", "start"]