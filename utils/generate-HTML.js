const fs =require('fs');

//writes index.html file
const writeFile = fileContent =>{
    return new Promise((resolve, reject)=>{
        fs.writeFile('./assets/index.html', fileContent, err=>{
            if(err){
                reject(err);
                return;
            } else{
                console.log('Team Created! Check out the index file in the "assets" folder!')
            }

            resolve({
                ok: true,
                message:'Team Created! Check out the index file in the "assets" folder!'
            });
        });
    });
};

module.exports = {writeFile};