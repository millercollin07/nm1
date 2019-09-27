docker stop $(docker ps -a -q)
#docker rm $(docker ps -a -q)
#docker rmi $(docker images -q)
docker build -t nm1 .
docker run -p 8080:8080 -t nm1
