# Sử dụng một base image chứa Node.js và npm
FROM node:14-alpine

# Đặt thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json nếu có và cài đặt dependencies
COPY package*.json ./
RUN npm install

# Sao chép tất cả các file và thư mục trong thư mục hiện tại vào thư mục làm việc trong container
COPY ./ ./

# Build ứng dụng React
RUN npm run build

# Mở cổng 3000
EXPOSE 3000

# Khởi động ứng dụng React
CMD ["npm","run", "start"]
