# Dockerfile (reemplazo recomendado)
FROM node:20-alpine

# Crea y usa un usuario no root (opcional pero recomendable)
RUN addgroup -S nodegrp && adduser -S nodeuser -G nodegrp

WORKDIR /app

# Copia solo manifiestos primero para aprovechar cache
COPY package*.json ./

# Instala solo dependencias de producción
RUN npm ci --omit=dev

# Copia el resto del código
COPY . .

# Asegura entorno de prod
ENV NODE_ENV=production

# La app escucha en 3000 por defecto
EXPOSE 3001

# Cambia a usuario no root
USER nodeuser

# Arranque
CMD ["node", "src/app.js"]
