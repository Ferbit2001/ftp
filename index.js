let Client = require('ftp');
let fs = require('fs');
const { resolve } = require('path');
let c = Client();

const get = (path) => {
    return new Promise((resolve,reject)=>{
        c.on('ready', () => {
            c.get(path, function(err, stream) {
              if (err) throw err;
              stream.once('close', function() { c.end(); });
              stream.pipe(fs.WriteStream(path.split('/').at(-1)))
              resolve(path.split('/').at(-1))
            });
        });
        c.on('error', reject)
        
        let config = {
            host:'192.168.0.1',
            port:21,
            user:'vodafone',
            password:'DCAK93UQ'
        }
        
        c.connect(config);
    })    
}

get('/B/001.ts')

module.exports = get