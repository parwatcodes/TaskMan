#!/bin/bash

if !command -v nginx &> /dev/null
then
    echo "Nginx not found. Installing..."
    sudo yum install -y nginx
    sudo systemctl enable nginx
    sudo systemctl start nginx
else
    echo "Nginx is already installed."
fi
