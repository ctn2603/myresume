# syntax=docker/dockerfile:1

# Specify command line argument
ARG NODE_VERSION=20.10.0

# Choose image
FROM node:${NODE_VERSION}-alpine

# Install Git
RUN apk add git

# Selection work directory in container
WORKDIR /usr/src/app

# Speed up build process by checking if changes happen at this layer
COPY package.json ./
COPY yarn.lock ./

# Install all dependencies
RUN yarn install

# Copy all files in host to containers
COPY . .

# Expose port
EXPOSE 3000

# Start the program
CMD yarn run dev
