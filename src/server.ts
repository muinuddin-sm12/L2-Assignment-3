import app from "./app";
import config from "./app/config";

async function main(){
    try{
        app.listen(config.port, () => {
            console.log(`App is listening on PORT: ${config.port}`)
        })
    }catch(err){
        console.log(err);
    }
}
main();