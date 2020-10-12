#!/usr/bin/env bash

yarn typeorm schema:drop && yarn typeorm migration:run && yarn start:prod