import { Request, Response } from 'express';
import dotenv from 'dotenv';
import s3 from '../config/awsConfig';

dotenv.config();

export const generateUploadURL = async (req: Request, res: Response) => {
  const { fileName, fileType } = req.query;

  if (!fileName || !fileType) {
    return res
      .status(400)
      .send({ error: 'Nome do arquivo e tipo do arquivo são obrigatórios.' });
  }

  const s3Params = {
    Bucket: process.env.S3_BUCKET!,
    Key: `${Date.now()}-${fileName}`,
    Expires: 120,
    ContentType: fileType as string,
  };

  try {
    const uploadURL = await s3.getSignedUrlPromise('putObject', s3Params);
    res.status(200).send({ uploadURL });
  } catch (error) {
    res.status(500).send({ error: 'Erro ao gerar URL.' });
  }
};
