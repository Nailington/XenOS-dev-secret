const express = require('express');
const webpack = require('webpack');
const path = require('path');

try {
  var bundle = webpack({
    mode: 'development',
    entry: path.join(__dirname, 'public/rsc/js/entry.js'),
    output: {
      path: path.join(__dirname, 'public/rsc/web/'),
      filename: 'bundle.js'
    },
    watch: true,
  }, (e) => console.log(e||'Bundled'));
} catch (e) {
  console.log("Webpack Uncaught Error: "+e);
}

// should be fine webpack wont affect (i think)
// does it matter that im using jquery for the window movement? (with webpakc) probably not - ill just port the jqeury rq
// okay nw 
const app = express();
app.use(express.static('public'))


app.listen(3000, () => {
  console.log('server started');
});
