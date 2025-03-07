import ibm_db from 'ibm_db';

const dbConfig = {
  DATABASE: process.env.NEXT_DB_DATABASE,
  HOSTNAME: process.env.NEXT_DB_HOST,
  UID: process.env.NEXT_DB_USERNAME,
  PWD: process.env.NEXT_DB_PASSWORD,
  PORT: process.env.NEXT_DB_PORT, // Default port
  PROTOCOL: 'TCPIP',
  SECURITY: 'SSL'
};

export const connectToDb = async () => {
  return new Promise((resolve, reject) => {
    const connStr = `DATABASE=${dbConfig.DATABASE};HOSTNAME=${dbConfig.HOSTNAME};UID=${dbConfig.UID};PWD=${dbConfig.PWD};PORT=${dbConfig.PORT};PROTOCOL=${dbConfig.PROTOCOL};SECURITY=${dbConfig.SECURITY}`;
    
    ibm_db.open(connStr, (err, conn) => {
      if (err) {
        reject(err);
      } else {
        resolve(conn);
      }
    });
  });
};
