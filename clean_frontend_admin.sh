docker ps -a --filter=name="fiveplus-frontend-main*"
docker stop $(docker ps --filter=name="fiveplus-frontend-main*" -q)
docker rm -v $(docker ps -a --filter=name="fiveplus-frontend-main*" -q)
docker rmi $(docker images --filter=reference="fiveplus/frontend-main*" -q) -f

read -n 1 -s -r -p "Press any key to continue"