# Sử dụng image Node.js chính thức từ Docker Hub
FROM node:16-alpine

# Tạo thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json (nếu có)
COPY package.json ./
COPY package-lock.json ./

# Cài đặt các dependencies
RUN npm install
# Sao chép toàn bộ mã nguồn của bạn vào thư mục làm việc trong container
COPY . .

# Expose cổng mà ứng dụng của bạn sẽ chạy
EXPOSE 3001

# Lệnh để khởi động ứng dụng của bạn
CMD ["npm", "run", "start"]
