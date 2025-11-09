<div align="center">

# 🚀 Nginx Server Configured and Deployed Node.js Application using Docker and SSL

</div>



## 📋 Prerequisites

Before you begin, make sure the following are installed on your system:

- 🐳 **Docker**  


## ⚙️ Overview

This project demonstrates how to:

- Deploy a Node.js application inside a Docker container for consistent and portable environments.
- Configure Nginx as a reverse proxy and load balancer to efficiently route traffic across Node.js instances.
- Secure the application using SSL/TLS (HTTPS) for encrypted and trusted communication.
- Implement automation and DevOps best practices for reliable deployment and scalability.



## 🧱 Project Structure

.

├── Dockerfile

├── docker-compose.yml

├── index.html

├── package.json

├── server.js

├── public/

│ ├── style.js

│ └── script.js

└── README.md



## 💻 Installation Guide

### 1️⃣ Install Node.js

```bash
# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# In lieu of restarting the shell:
. "$HOME/.nvm/nvm.sh"

# Download and install Node.js:
nvm install 24

# Verify the Node.js version:
node -v  # Should print "v24.11.0"

# Verify npm version:
npm -v   # Should print "11.6.1"
```

## 2️⃣ Configure the nginx.conf file
### Install Ngnix:
```bash
sudo dnf install ngnix -y
```

```bash
vi /etc/nginx/nginx.conf
```
📌 Open this file and copy the contents of this project's nginx.conf file to your nginx.conf file"


3️⃣ Start Nginx
```bash
sudo systemctl enable --now nginx
```

## 🔐 SSL Configuration

Create your own self-signed certificate in any directory:

cmd:-

```bash
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout nginx-selfsigned.key -out nginx-selfsigned.crt
```
⚠️ Note: This is a self-signed certificate and not CA-signed. Browsers like Chrome will show a message such as “Not a valid certificate”.

To use your own domain certificate, replace these files and update your Nginx configuration.


## 🚀 Setup and Deployment

1️⃣ Clone the repository
```bash
git clone <your-repo-url>
cd <project-folder>
```

2️⃣ Start the containers using Docker Compose
```bash
docker compose up --build -d
```
3️⃣ Verify running containers
```bash
docker ps
```

## 4️⃣ Access the application

Visit:
👉 https://localhost


🔁 Stopping the Containers
```bash
docker compose down
```

## 🧩 Notes

🌐 Nginx acts as a reverse proxy, forwarding HTTPS requests to the Node.js app.

⚙️ Update environment variables and ports in docker-compose.yml as needed.

🧱 Works seamlessly for both development and production environments.



## Output

![Nginx_op](<Screenshot From 2025-11-09 13-39-25.png>)


## Cannot see the output?
### Some issues:

1. Start and enable ngnix.service 
2. Change SELinux --> Permissive
3. Check the network is up and running 
4. Docker container is not running