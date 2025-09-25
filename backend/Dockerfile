# Use Node official image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy backend code
COPY . .

# Expose port
EXPOSE 5000

# Run backend
CMD ["npm", "start"]
