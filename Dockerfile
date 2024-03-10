# Use official Node.js image as base
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Copy the rest of the application code to the working directory
COPY . .
ARG ENV_FILE
COPY $ENV_FILE .env

# Install dependencies
RUN npm ci

# Build the Next.js application for production
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Command to run the Next.js application
CMD ["npm", "start"]
