FROM denoland/deno:1.33.4

EXPOSE 1993

WORKDIR /app

USER deno

#COPY deps.ts .
#RUN deno cache deps.ts

COPY . .
#RUN deno cache server.ts

CMD ["deno", "run", "-A", "server.ts"]
