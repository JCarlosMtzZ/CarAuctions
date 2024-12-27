FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app
EXPOSE 80

# Caching for all .csproj files
COPY Carsties.sln Carsties.sln
COPY src/AuctionsService/AuctionsService.csproj src/AuctionsService/AuctionsService.csproj
COPY src/SearchService/SearchService.csproj src/SearchService/SearchService.csproj
COPY src/GatewayService/GatewayService.csproj src/GatewayService/GatewayService.csproj
COPY src/Contracts/Contracts.csproj src/Contracts/Contracts.csproj
COPY src/IdentityService/IdentityService.csproj src/IdentityService/IdentityService.csproj
COPY src/BiddingService/BiddingService.csproj src/BiddingService/BiddingService.csproj
COPY src/NotificationService/NotificationService.csproj src/NotificationService/NotificationService.csproj
COPY tests/AuctionsService.UnitTests/AuctionsService.UnitTests.csproj tests/AuctionsService.UnitTests/AuctionsService.UnitTests.csproj
COPY tests/AuctionsService.IntegrationTests/AuctionsService.IntegrationTests.csproj tests/AuctionsService.IntegrationTests/AuctionsService.IntegrationTests.csproj

# Restore package dependencies
RUN dotnet restore Carsties.sln

# App folders
COPY src/NotificationService src/NotificationService
COPY src/Contracts src/Contracts
WORKDIR /app/src/NotificationService
RUN dotnet publish -c Release -o /app/src/out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/src/out .
ENTRYPOINT [ "dotnet", "NotificationService.dll" ]