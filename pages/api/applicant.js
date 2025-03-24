import { connectToDb } from "@/lib/db2";

export default async function  getApplicationDetails(req,res) {
    
  if (req.method === 'GET') {
      try {
        const conn = await connectToDb();
        await conn.query('SELECT * FROM APPLICANTDATA WHERE APPLICANTID = ?',['20250320'], (err, data) => {
          conn.close();
          if (err) {
            res.status(500).send({ error: 'Database query failed' });
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