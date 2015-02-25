# How Generate new archive for download

## Get Kendo sources :
git clone git@github.com:telerik/kendo-ui-core.git
cd kendo-ui-core
git submodule update --init
npm run build


## Install r.js
git clone git@github.com:jrburke/r.js.git
cd r.js
sudo npm install -g requirejs

## Copy dist in archiveReference/

cp -r kendo-ui-core/dist/* archiveReference/Kendo/2014.3

## Generate all files

cd archiveReference/Kendo
r.js -o ./build.js

## zip the result

cd archiveReference
zip -r KendoUi-2014-3.xxxx.zip  KendoUI