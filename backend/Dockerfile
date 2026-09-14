# --- build stage ---
FROM golang:1.22-alpine AS build
WORKDIR /src
COPY go.mod ./
RUN go mod download 2>/dev/null || true
COPY . .
RUN go mod tidy && CGO_ENABLED=0 GOOS=linux go build -o /out/server .

# --- run stage ---
FROM alpine:3.20
RUN adduser -D -H appuser
WORKDIR /app
COPY --from=build /out/server ./server
ENV PORT=8080
EXPOSE 8080
USER appuser
ENTRYPOINT ["./server"]
