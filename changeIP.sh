#!/bin/bash

ip_address=$(curl -s ifconfig.me)

for file in "./plantillas-cgi/nav-component.js"; do
    echo "const ip = \"$ip_address\" || \"13.59.127.71\";" | cat - "$file" > temp && mv temp "$file"
    echo "Se actualizó la IP en: $file"
done
