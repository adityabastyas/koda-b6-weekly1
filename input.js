import { stdin, stdout } from "node:process";

export const tanyaUser = (pertanyaan) => {
  
  stdout.write(pertanyaan);
  
  stdin.setEncoding("utf8");
  
  return new Promise((resolve) => {
 
    const bacaInput = (jawaban) => {
      
     
      stdin.removeListener("data", bacaInput);
      
      stdin.pause();
    
      resolve(jawaban.trim());
    };
    
  
    stdin.on("data", bacaInput);

    stdin.resume();
  });
};
