# Desafio Docker FullCycle

Este repositório contém o desafio Docker proposto pelo curso FullCycle.

## Descrição

O primeiro desafio é criar uma aplicação em Go que exiba a mensagem "Full Cycle Rocks!" e publicá-la no Docker Hub. O requisito principal é que a imagem gerada tenha menos de 2MB.

O segundo desafio é criar um docker compose com uma aplicação em Node.js que se conecta ao banco de dados PostgresSQL e um proxy reverso com nginx. A aplicação deve ser executada e retornar a mensagem "Full Cycle Rocks!" e uma lista de pessoas cadastradas no banco de dados.
## Imagem no Docker Hub

A imagem Docker gerada está disponível no Docker Hub e pode ser baixada utilizando o seguinte comando:

Docker Hub: https://hub.docker.com/r/williamroberttv/fullcycle-docker-golang
```bash
docker pull williamroberttv/fullcycle-docker-golang:latest
```

## Como executar

Para executar o primeiro desafio, basta executar o seguinte comando:

```bash
docker run -p 8080:8080 williamroberttv/fullcycle-docker-golang:latest
```

Para executar o segundo desafio, basta executar o seguinte comando:
```bash
cd nodejs
docker compose up -d
```
