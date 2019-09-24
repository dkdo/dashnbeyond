#!/bin/sh

sed -i "s/environmentDash\.dashApiKey/$2/g" ./src/environments/environment.ts
sed -i "s~environmentDash\.dashApi~$1~g" ./src/environments/environment.ts
sed -i "/import {environmentDash}/d" ./src/environments/environment.ts

sed -i "s/environmentDash\.dashApiKey/$2/g" ./src/environments/environment.prod.ts
sed -i "s~environmentDash\.dashApi~$1~g" ./src/environments/environment.prod.ts
sed -i "/import {environmentDash}/d" ./src/environments/environment.prod.ts
