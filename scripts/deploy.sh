#!/bin/bash

node scripts/build.js
cp static.json build
cd build && git init
git remote add heroku https://git.heroku.com/undeadwoody-songrequest.git
git add .
git commit -m "New Release"
git push heroku master --force
