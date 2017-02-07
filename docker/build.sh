#! /bin/bash -e

rm -rf build
mkdir build

cp ../build/libs/WebsiteMedicalRecord-0.0.1-SNAPSHOT.jar build

docker build -t web_page
