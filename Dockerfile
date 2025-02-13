# ---- STEP 1: Build the React App using Vite ----
    FROM node:18 AS build

    WORKDIR /app
    
    # Copy package.json (and package-lock.json if available) then install dependencies
    COPY package*.json ./
    RUN npm install
    
    # Copy the rest of your application code and build the app
    COPY . .
    RUN npm run build
    
    # ---- STEP 2: Serve with NGINX ----
    FROM nginx:alpine
    
    # Copy built files from the build stage (Vite outputs to "dist" by default)
    COPY --from=build /app/dist /usr/share/nginx/html
    
    # Copy custom NGINX configuration file (see below)
    COPY nginx.conf /etc/nginx/conf.d/default.conf
    
    # Expose port 80 for incoming traffic
    EXPOSE 80
    
    # Start NGINX
    CMD ["nginx", "-g", "daemon off;"]
    