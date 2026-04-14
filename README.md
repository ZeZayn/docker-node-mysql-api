# Docker Node MySQL API

Containerized backend service using Docker with service-to-service communication via Docker network.

## Purpose

This project demonstrates how to deploy a backend service with a database using Docker containers and networking.

## 🚀 Features
- Node.js backend
- MySQL database
- Docker setup (container + network)

## 🧱 Tech Stack
- Node.js
- MySQL
- Docker

## 🏗️ Architecture

Client → Node.js API → MySQL (Docker Network)

## ⚙️ How to Run

docker network create mynet

docker run -d --name mysql --network mynet -e MYSQL_ROOT_PASSWORD=1234 mysql:8

docker build -t myapp .

docker run -d --name myapp --network mynet myapp

Output
docker logs myapp

Expected
Connected to MYSQL
[ { id: 1, name: 'ZANI' }, { id: 2, name: 'AIMAN' } ]




## Key Learnings

- Configured container-to-container communication using Docker networking
- Built a multi-container backend system (API + Database)
- Debugged common Docker issues (networking, database connection)

## 🛠️ Notes
This is my first hands-on Docker + backend integration project.
Still improving and adding more features.
