# Use an official NGINX image as a base
FROM nginx:alpine

# Set the working directory
WORKDIR /app

# Copy the built files from the Vite build process
COPY dist /usr/share/nginx/html

# Copy a basic NGINX configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for HTTP traffic
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]