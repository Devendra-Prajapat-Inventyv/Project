# Step 1: Build the React App
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the app’s source code
COPY . .

# Build the React app
RUN npm run build

# Step 2: Serve the App with Nginx
FROM nginx:alpine

# Copy the built React app from the previous stage to the Nginx HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]