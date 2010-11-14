rm -rf .xpi_work_dir/

chmod -R 0777 translate/
rm -f translate.xpi
mkdir .xpi_work_dir
cp -r translate/* .xpi_work_dir/
cd .xpi_work_dir/

rm -rf `find . -name ".svn"`
rm -rf `find . -name ".DS_Store"`
rm -rf `find . -name "Thumbs.db"`

cd chrome/
zip -rq ../translate.jar *
rm -rf *
mv ../translate.jar ./
cd ../
zip -rq ~/Desktop/translate.xpi *
cd ..

rm -rf .xpi_work_dir/
