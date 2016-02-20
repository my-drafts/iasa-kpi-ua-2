#!/bin/bash

ps -ax | grep -e node | grep -e iasa-kpi-ua-2 | awk '{print $1}'
