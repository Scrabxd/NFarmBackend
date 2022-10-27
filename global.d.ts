namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      SecretKey:string;
      PGDATABASE:string;
      PGHOST:string;
      PGPASSWORD:string;
      PGPORT:number;
      PGUSER:string;
      ApiKey:string;
      AWSAccessKeyId:string;
      AWSSecretKey:string
    }
  }