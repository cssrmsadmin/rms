import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
@Injectable()
export class UploadFileService {

  FOLDER = 'jd-upload/';

  constructor() { }

  uploadfile(file) {

    const bucket = new S3(
      {
        accessKeyId: 'AKIAIYAYPXS4DS6PMMXQ',
        secretAccessKey: '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',
        region: 'us-east-1'
      }
    );

    const params = {
      Bucket: 'jsa-angular6-bucket6',
      Key: this.FOLDER + "username" + "." + file.name.replace(/^.*\./, ''),
      Body: file,
    };

    bucket.upload(params, function (err, data) {
      console.log(params);
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }

      console.log('Successfully uploaded file.', data);
      return true;
    });
  }

}
