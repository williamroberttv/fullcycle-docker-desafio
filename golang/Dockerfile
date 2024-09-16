FROM golang:1.22.5-alpine AS builder

RUN apk add --no-cache upx

WORKDIR /app

COPY go.mod ./
RUN go mod download

COPY . .

# Build the Go binary
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags="-s -w" -o main .

# Compress the binary with UPX
RUN upx --best main

FROM scratch AS runner

WORKDIR /app

COPY --from=builder /app/main .

EXPOSE 8080

CMD ["./main"]
