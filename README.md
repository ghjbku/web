2. óra
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

