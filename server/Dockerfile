# Sử dụng image Node.js chính thức từ Docker Hub
FROM node:14

# Tạo thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json (nếu có)
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn của bạn vào thư mục làm việc trong container
COPY . .

# Expose cổng mà ứng dụng của bạn sẽ chạy
EXPOSE 3000

# Lệnh để khởi động ứng dụng của bạn
CMD ["node", "app.js"]
