import fs from 'fs';
import { join } from 'path';

export const POST = async (req) => {
  const newService = await req.json();

  const filePath = join(process.cwd(), 'app/api/services/services.json');
  const existingData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  const updatedData = [...existingData, newService];

  fs.writeFileSync(filePath, JSON.stringify(updatedData));

  return new Response(JSON.stringify(updatedData));
};

export const GET = async () => {

  const filePath = join(process.cwd(), 'app/api/services/services.json');
  const existingData = JSON.parse(fs.readFileSync(filePath, 'utf8'));



  return new Response(JSON.stringify(existingData));
};
