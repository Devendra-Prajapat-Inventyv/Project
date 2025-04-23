FROM node:18

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source code
COPY . .

# Build React app (this creates /build)
RUN npm run build

# Expose the port your app listens on
EXPOSE 5000

# Start the Express server
CMD ["node", "server.js"]
