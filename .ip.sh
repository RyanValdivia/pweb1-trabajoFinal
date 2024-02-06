ip=$(curl -s ifconfig.me)

env=".env"

echo "API_IP=$ip" >$env

echo "IP actualizada: $ip"
