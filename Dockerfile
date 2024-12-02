# Use the official Node.js image as a base
FROM node:22

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the rest of your application code
# COPY ./server .
# RUN npm install

# Expose the port that your app runs on
EXPOSE 8080

# Command to run your app
# CMD ["node", "server.js"]