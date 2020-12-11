#!/usr/bin/env bash

echo '================================================'
echo 'install npm'
echo '================================================'

npm install

echo '================================================'
echo 'npm build'
echo '================================================'

npm run build

echo '================================================'
echo 'create logs folder'
echo '================================================'

echo mkdir -p /var/log/nginx/

echo '================================================'
echo 'docker build image fiveplus/frontend-main'
echo '================================================'

docker build -f ./Dockerfile -t fiveplus/frontend-main --force-rm .

echo '================================================'
echo 'create network'
echo '================================================'

docker network create fiveplus-network || true

echo '================================================'
echo 'create container fiveplus-frontend-main'
echo '================================================'

docker create \
--restart always \
--name fiveplus-frontend-main \
--network fiveplus-network \
--publish 8082:80 \
fiveplus/frontend-main

echo '================================================'
echo 'run container fiveplus-frontend-admin'
echo '================================================'

docker start fiveplus-frontend-main

echo " "
echo "==========================================="
echo " "
echo "Finished!"
echo " "
echo '================================================'
read -n 1 -s -r -p "Press any key to continue"