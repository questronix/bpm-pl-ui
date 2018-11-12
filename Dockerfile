FROM mhart/alpine-node:8

# Set non-root user pluksvc
RUN adduser -D -u 1000 pluksvc
USER pluksvc

#WORKDIR /home/pluksvc
WORKDIR /home/pluksvc

COPY . .

# RUN npm config set strict-ssl false
# RUN npm config set registry "http://registry.npmjs.org"
# RUN npm install

EXPOSE 3011
CMD [ "node", "server.js" ]
