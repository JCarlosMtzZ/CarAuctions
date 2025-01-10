# Car Auctions Microservices Application

## Overview

This project is a **microservices-based application** for managing car auctions. It enables users to browse and filter available auctions, place bids, create new auctions, and manage their auctions through a web interface.

---

## Key Features

- **Auction Browsing**: Explore ongoing car auctions with advanced filtering and search capabilities.  
- **User Authentication**: Secure user registration and login system using Duende IdentityServer.  
- **Bidding System**: Place bids on desired auctions in real-time via SignalR.  
- **Auction Management**: Create, edit, and manage car auctions.  
- **Notifications**: Get real-time updates via push notifications.

---

## Architecture

The application employs a **microservices architecture** for scalability, maintainability, and modular development.  

### Technologies Used

#### **Frontend**:
- **Framework**: Next.js 15  
- **Programming Language**: TypeScript  
- **State Management**: Zustand  
- **Styling**: Tailwind CSS  

#### **Backend**:
- **Framework**: .NET 8 with C#
- **ORM**: Entity Framework Core  
- **APIs**: gRPC, REST  
- **Databases**:  
  - MongoDB (Search and Bidding services)  
  - PostgreSQL (Identity and Auction services)  
- **Messaging**: RabbitMQ for event-driven communication  
- **Reverse Proxy**: YARP  
- **Authentication/Authorization**: Duende IdentityServer  
- **Real-Time Communication**: SignalR  

#### **Infrastructure**:
- **Load Balancer**: NGINX  
- **Containerization**: Docker and Docker Compose for local deployment  
- **Orchestration**: Kubernetes for production-grade deployment  

#### **Testing**:
- **Framework**: xUnit for unit and integration testing  

---

## Services

1. **Client Application**:  
   - **WebApp**: Developed using Next.js, leveraging TypeScript, Zustand, and Tailwind CSS for a seamless and responsive UI.  

2. **Microservices**:  
   - **Identity Service**: Manages user authentication and accounts using Duende IdentityServer and PostgreSQL.  
   - **Auction Service**: Handles the auction lifecycle using Entity Framework Core and PostgreSQL.  
   - **Search Service**: Provides filtering and search functionality powered by MongoDB.  
   - **Bidding Service**: Manages real-time bidding operations with MongoDB and SignalR.  
   - **Notification Service**: Pushes real-time notifications using SignalR.  

3. **Communication**:  
   - **Event Bus**: RabbitMQ for publish/subscribe messaging between services.  
   - **Ingress Gateway**: NGINX and YARP for managing traffic to services.  

---

## Deployment

### Local Deployment

You can run this app locally on your computer by following these instructions:

1. Using your terminal or command prompt clone the repo onto your machine in a user folder
```
git clone https://github.com/JCarlosMtzZ/CarAuctions.git
```
2. Change into the CarAuctions directory
```
cd CarAuctions
```
3. Ensure you have Docker Desktop installed on your machine. If not download and install from Docker and review their installation instructions for your Operating system [here](https://docs.docker.com/desktop/).
4. Build the services locally on your computer by running (NOTE: this may take several minutes to complete):
```
docker compose build
```
5. Once this completes you can use the following to run the services:
```
docker compose up -d
```
6. To see the app working you will need to provide it with an SSL certificate. To do this please install 'mkcert' onto your computer which you can get from [here](https://github.com/FiloSottile/mkcert). Once you have this you will need to install the local Certificate Authority by using:
```
mkcert -install
```
7. You will then need to create the certificate and key file on your computer to replace the certificates that I used. You will need to change into the 'devcerts' directory and then run the following command:
```
cd devcerts
mkcert -key-file carsties.local.key -cert-file carsties.local.crt app.carsties.local api.carsties.local id.carsties.local
```
8.  You will also need to create an entry in your host file so you can reach the app by its domain name. Please use this [guide](https://www.hostinger.com/tutorials/how-to-edit-hosts-file) if you do not know how to do this. Create the following entry:
```
127.0.0.1 id.carsties.local app.carsties.local api.carsties.local
```
9. You should now be able to browse to the app on https://app.carsties.local

---
