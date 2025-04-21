# FROM node:20 AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm config set registry https://registry.npmmirror.com
# RUN npm install
# COPY . . 
# RUN npm run build

# FROM nginx:stable-alpine
# COPY --from=build /app/dist /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx","-g","daemon off;"]

FROM node:20 AS builder
WORKDIR /app
# 先复制包管理文件
COPY package*.json ./
# 设置镜像源并安装依赖
RUN npm config set registry https://registry.npmmirror.com && \
    npm ci --frozen-lockfile
# 复制源代码
COPY . .
# 执行构建
RUN npm run build

# 生产阶段
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]