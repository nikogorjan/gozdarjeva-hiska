# ---- STEP 1: Build the React App ----
    FROM node:18 AS build

    WORKDIR /app
    
    # Copy package.json and package-lock.json (if available) and install dependencies
    COPY package.json package-lock.json ./
    RUN npm install
    
    # Copy all project files and build the React app
    COPY . .
    RUN npm run build
    
    # ---- STEP 2: Serve with NGINX ----
    FROM nginx:alpine
    
    # Copy built React files from the previous stage
    COPY --from=build /app/dist /usr/share/nginx/html
    
    # Expose port 80
    EXPOSE 80
    
    # Start NGINX
    CMD ["nginx", "-g", "daemon off;"]