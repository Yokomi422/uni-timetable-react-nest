FROM node:lts AS builder

WORKDIR /app

COPY ./../../frontend/package.json ./../../frontend/pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install

COPY ./../../frontend/public ./public 
COPY ../../frontend/src ./src
COPY ./../../frontend/tsconfig.json ./
COPY ./../../frontend/postcss.config.js ./
COPY ./../../frontend/tailwind.config.js ./

RUN pnpm run build

CMD ["pnpm", "start"]