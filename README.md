# 2. óra

git shortlog |grep -v ^\s | grep "^\w"

docker run -it -p 8080:80 ubuntu(megnyitja számára ezt a portot)

view etc/group

sudo usermod -aG docker $USER - 

apt-get update – frissíti az apt csomag indexeit

apt-cache search php

apt-get install -y php

service apache2 start

service --status-all

https://docs.docker.com/engine/security/rootless/

a2ensuite 

ls /etc/apache2/mods-enabled/

service apache2 restart

ls /home/

useradd -m -s /bin/bash user_name

mkdir public_html

echo user_name > ./public_html/index.html

su user_name

kell xampp is (root gecvi)

# 5.óra

```console
docker run -it --name athena ubuntu
docker run -it --name artemis ubuntu

apt-get update
apt-get install -y vim curl net-tools
cat /etc/hosts
```
