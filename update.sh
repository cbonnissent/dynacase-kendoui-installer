#!/usr/bin/env bash

rm -rf ./bower_components/
bower install KendoUI=kendo-ui
PACKAGE_VERSION=$(bower info kendo-ui version | tail -n 1 | cut -d "'" -f 2)
cd ./bower_components
mkdir -p ./KendoUI/$PACKAGE_VERSION/
cd ./KendoUI/$PACKAGE_VERSION/
mv ../src/js/ .
mv ../src/styles/ .
cp ../../../builder/*.js .
cp ../../../builder/.htaccess .
r.js -o ./build.js && r.js -o ./build-minified.js
rm ./*.js
cd -
cd KendoUI/$PACKAGE_VERSION/styles/web/common/
ln -s ../textures/ .
cd -
cd KendoUI/$PACKAGE_VERSION/styles/web/themes/
ln -s ../Bootstrap .
cd -
echo `pwd`
zip -r "../KendoUI-$PACKAGE_VERSION.zip" ./KendoUI/$PACKAGE_VERSION/
cd ..
scp "KendoUI-$PACKAGE_VERSION.zip" distrib@ftp.anakeen.com:/share/ftp/third-party/
echo $PACKAGE_VERSION > VERSION
rm -rf ./bower_components/