#!/bin/sh

sed -i '' -e "s/environmentDash\.dashApiKey/$2/g" ./src/environments/environment.ts
sed -i '' -e "s/environmentDash\.dashApi/$1/g" ./src/environments/environment.ts
sed -i '' -e "/import {environmentDash} from '\.\/environment\.dash';/d" ./src/environments/environment.ts

sed -i '' -e "s/environmentDash\.dashApiKey/$2/g" ./src/environments/environment.prod.ts
sed -i '' -e "s/environmentDash\.dashApi/$1/g" ./src/environments/environment.prod.ts
sed -i '' -e "/import {environmentDash} from '\.\/environment\.dash';/d" ./src/environments/environment.prod.ts
