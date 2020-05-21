const Hapi = require('@hapi/hapi');
const Path = require('path');

const start =async()=>{
    const Server = new Hapi.Server({
        host: "0.0.0.0",
        port: 3000,
        // routes: {
        //     files: {
        //         relativeTo: Path.join(__dirname, 'public')
        //     }
        // }
    });
    await Server.register(require('@hapi/inert'));
    Server.route({
        path:'/',
        method:"GET",
        handler:(req, res)=>{
            return res.file('./static.html')
        }
    })
    
    Server.start().then((res)=>{
        console.log(`Server started at ${Server.info.uri}`)
    }).catch((err)=>{
        console.log("Server Error:",err);
    })
}

start();