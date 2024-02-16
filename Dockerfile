FROM node:21-alpine

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm ci --omit="dev"

# Copy app source code
COPY . .

# Build app
RUN node ace build --ignore-ts-errors

COPY ./.env ./build

# Expose port
EXPOSE 3333

# Start app
CMD ["node", "./build/server.js"]
