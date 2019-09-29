docker stop $(docker ps -a -q)
#docker rm $(docker ps -a -q)
#docker rmi $(docker images -q)
docker pull millercollin07/nm1 
docker run -p 5000:5000 -t nm1
