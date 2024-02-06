#!/bin/bash

ip_address=$(curl -s ifconfig.me)

for file in "./plantillas-cgi/nav-component.js"; do
    echo "const ip = \"$ip_address\" || \"localhost\";" > temp
    
    tail -n +2 "$file" >> temp
    
    mv temp "$file"
    
    echo "Se actualizó la IP en: $file"
done
