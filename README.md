# Docker Node MySQL API

Simple project connect Node.js with MySQL using Docker containers.

## 🚀 Features
- Node.js backend
- MySQL database
- Docker setup (container + network)

## 🧱 Tech Stack
- Node.js
- MySQL
- Docker

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



## 🛠️ Notes
What I Learned
How Docker container works
Connect container (API ↔ MySQL)
Fix common errors (network, connection, DB)
Basic backend + database integration
This is my first hands-on Docker + backend integration project.
Still improving and adding more features.
