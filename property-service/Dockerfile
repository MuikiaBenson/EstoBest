# Dockerfile

# Use the official Node.js image
FROM node:14

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# Expose port and start the app
EXPOSE 3000
CMD ["npm", "start"]
