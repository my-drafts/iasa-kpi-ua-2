#!/bin/bash

id= $( ps -ax | grep -e node | grep -e iasa-kpi-ua-2 | awk '{print $1}' )
echo "$id"
kill -9 $id
