FROM frolvlad/alpine-oraclejdk8
VOLUME /tmp
ADD build/libs/WebsiteMedicalRecord-0.0.1-SNAPSHOT.jar WebsiteMedicalRecord.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/WebsiteMedicalRecord.jar"]
