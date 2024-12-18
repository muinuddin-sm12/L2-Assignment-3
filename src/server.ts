import app from "./app";

async function main(){
    try{
        app.listen(5000, () => {
            console.log('App is listening on PORT: 5000')
        })
    }catch(err){
        console.log(err);
    }
}
main();