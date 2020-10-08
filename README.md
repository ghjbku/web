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
`docker exec -it  *container name* /bin/bash`

```console
docker run -it --name athena ubuntu
docker run -it --name artemis ubuntu

apt-get update
apt-get install -y vim curl net-tools iputils-ping
cat /etc/hosts
ping 172.0.0.3        //ping the ip address

apt-cache search mysql
--athena
apt-get install mysql-client mysql-server
--artemis
apt-get install apache2 php php-mysql mysql-client

--athena
service --status-all
service mysql start
service mysql restart
mysql
create database wordpress;
show databases
create user alice identified by 'secret';
grant all on wordpress .* to 'alice'@'%';

mysql -u alice -psecret;
select user() from dual;

vi /etc/mysql/mysql.conf.d/mysqld.cnf

bind-address keresése
i betű
esc
:w
:q!
service mysql restart

--artemis
service apache2 start
service apache2 restart

mysql -u alice -psecret -h 172.17.0.3
select user() from dual;

```
