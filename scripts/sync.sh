#!/bin/bash

#validate if params exists
if [ -z "$1" ] || [ -z "$2" ]; then
    echo "Usage: $0 <param1> <param2>"
    exit 1
fi

echo "param 1: $1"
echo "param 2: $2"
