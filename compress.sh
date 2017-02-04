echo 'starting to compress css and js'

mkdir -p tmp/css

#compress css
echo 'compresing site...'
java -jar /usr/share/yui/yuicompressor.jar --type css --line-break 200 -o tmp/css/00.css  output/css/normalize.css
java -jar /usr/share/yui/yuicompressor.jar --type css --line-break 200 -o tmp/css/10.css  output/css/layout.css
java -jar /usr/share/yui/yuicompressor.jar --type css --line-break 200 -o tmp/css/20.css  output/css/styles.css
java -jar /usr/share/yui/yuicompressor.jar --type css --line-break 200 -o tmp/css/40.css  output/css/mediaqueries.css


#contcat
cat tmp/css/* > output/css/atyca-min.css

mkdir -p tmp/js

echo 'Cleaning console.log from this files'
#grep -rl "console\." output/js/ --exclude="*.min.js"
#grep -rl "console\." output/js/ --exclude="*.min.js" | xargs sed -rsi "s/console\.\w*\(.*\);?//g"

#compress js
#java -jar /usr/share/yui/yuicompressor.jar --type js --line-break 200 -o output/js/libs/bbtest-min.js output/js/libs/bbtest.js

#cp output/js/libs/jquery-1-11-1-min.js tmp/js/001.js
#cp output/js/libs/jquery-2.1.4.min.js tmp/js/001.js
#java -jar /usr/share/yui/yuicompressor.jar --type js --line-break 200 -o tmp/js/020.js output/js/libs/detect-mobile.js
#cp output/js/plugins/jquery.sticky-kit.min.js tmp/js/030.js
#java -jar /usr/share/yui/yuicompressor.jar --type js --line-break 200 -o tmp/js/040.js output/js/plugins/jquery-lazyload.js
#java -jar /usr/share/yui/yuicompressor.jar --type js --line-break 200 -o tmp/js/999.js output/js/init.js

#concat
#cat tmp/js/* > output/js/anuario-2015-min.js

#java -jar /usr/share/yui/yuicompressor.jar --type js --line-break 200 -o output/js/load-min.js output/js/load-prod.js

#java -jar /usr/share/yui/htmlcompressor.jar --compress-js -r --remove-intertag-spaces --type html --remove-surrounding-spaces all --nomunge -o output output

echo 'Ta dan!'
