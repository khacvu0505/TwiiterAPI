import { S3 } from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';
import { config } from 'dotenv';
import fs from 'fs';
import path from 'path';

config();
const s3 = new S3({
  region: process.env.AWS_REGION,
  credentials: {
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string
  }
});

// Run above code to create and view list buckets, It will auto create buckets if not exists with name of s3 define on Amazon S3
// s3.listBuckets({}).then((data) => {
//   console.log('data', data);
// });

export const uploadFileToS3 = ({
  fileName,
  filePath,
  contentType
}: {
  fileName: string;
  filePath: string;
  contentType: string;
}) => {
  const parallelUploads3 = new Upload({
    client: new S3(),
    params: {
      Bucket: 'social-network-ap-north-3',
      Key: fileName,
      Body: fs.readFileSync(path.resolve(filePath)),
      ContentType: contentType
    },
    tags: [
      /*...*/
    ], // optional tags
    queueSize: 4, // optional concurrency configuration
    partSize: 1024 * 1024 * 5, // optional size of each part, in bytes, at least 5MB
    leavePartsOnError: false // optional manually handle dropped parts
  });

  // Progress upload file
  // parallelUploads3.on('httpUploadProgress', (progress) => {
  //   console.log(progress);
  // });

  return parallelUploads3.done();
};
