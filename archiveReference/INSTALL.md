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

cd archiveReference/KendoUI
r.js -o ./build.js && r.js -o ./build-minified.js

## zip the result

cd archiveReference

### Add symlink
cd KendoUI/2014.3/web/common/
ln -s ../textures/ .
cd -
cd KendoUI/2014.3/styles/web/themes/
ln -s ../Bootstrap .
cd -

zip -r KendoUi-2014-3.xxxx.zip  KendoUI