import fs from 'fs';
import { join } from 'path';
export const GET = async (req,{params}) => {
    try{

        const {index} = params
        const filePath = join(process.cwd(), 'app/api/services/services.json');
        const existingData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      
        return new Response(JSON.stringify(existingData[index]));
    }catch(err){
        console.log("err")
        // return new Response(JSON.stringify(err));
    }
  
  };
  