import { connectToDb } from "@/lib/db2";

export default async function  addApplication(req,res) {
    
    if (req.method === 'POST') {
      const {
        user_id,
        applicant_name,
        date_created,
        date_last_modified,
        status,
        permit_id,
        permit_version,
        persona_type
      } = req.body;

        try {
          const conn = await connectToDb();
          await conn.query('INSERT INTO EDB_APPLICATION(USER_ID,APPLICANT_NAME,DATE_CREATED,DATE_LAST_MODIFIED,STATUS,PERMIT_ID,PERMIT_VERSION,PERSONA_TYPE) VALUES (?, ?, ?, ? ,? ,? ,? ,? )',
            [user_id,applicant_name,date_created, date_last_modified,status,permit_id,permit_version,persona_type],
             (err, data) => {
            conn.close();
            if (err) {
              res.status(500).send({ error: err });
            } else {
              res.status(200).send(data);
            }
          });
        } catch (error) {
          res.status(500).send({ error: 'Database connection failed' });
        }
      } else {
        res.status(405).send({ error: 'Method Not Allowed' });
      }
}

