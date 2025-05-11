# Step 1: Build the React app
FROM node:20 AS build

WORKDIR /app

COPY package.json ./
RUN npm install && npm install -g npm@11.3.0

COPY . .
RUN npm run build

# Step 2: Use nginx to serve static build (distroless alternative)
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
