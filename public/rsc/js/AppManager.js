window.__XEN_WEBPACK.core.AppManagerComponent = class AMC {
  constructor(){
     this.apps = {appsInstalled:[{WelcomeToXenOS:{repository:"none/preload"}}]};
    this.permissions = {typeSetter: false};
  }
  // addAppToList(appName, appProp) {
  //   let newApp = {
  //       [appName]: {repository:appProp}
  //   };
  //   this.apps.appsInstalled.push(newApp);
  // }
  // exportAppList() {
  //   let json = JSON.stringify(this.apps);
  //   let blob = new Blob([json], {type: "application/json"});
  //   let link = document.createElement("a");
  //   link.href = URL.createObjectURL(blob);
  //   link.download = "save.xen";
  //   link.click();
  // }

  async download(id) {
    var percent = 0;
    // prefetch app details
    percent+=1;
    console.log(`%cXenOS PKG\n%c FETCH: META\n%c${Array.from('x'.repeat(percent)).map(e=>'=').join('')}`, 'background:white;font-family:sans-serif;color:black;padding:3px;border-radius:4px;font-size:18px;', 'font-size:16px;color:white;', 'background: rgb(255, 255, 255, 0.1;font-size:15px;');

    

    var metaBody = {
      id: id
    }
  
    var meta = await (await fetch('https://xenos-app-repository.enderkingj.repl.co/stream', {
      method: 'POST',
      body: JSON.stringify(metaBody)
    })).json();
    percent+=19

    console.log(`%c SUCCESS: ${meta.name}\n%c${Array.from('x'.repeat(percent)).map(e=>'=').join('')}%c`, 'font-size:16px;color:white;', 'font-size:15px;color:white;', 'background: rgb(255, 255, 255, 0.1;');

    metaBody.session = meta.session;

    var togo = 100 - percent - 20;
    var per = (togo / meta.assets.length);

    for (var i = 0; i<meta.assets.length; i++) {
      var asset = meta.assets[i];
      metaBody.asset = asset;

      console.log(`%c FETCH: ${meta.name}/${asset}\n%c${Array.from('x'.repeat(percent)).map(e=>'=').join('')}%c`, 'font-size:16px;color:white;', 'font-size:15px;color:white;', 'background: rgb(255, 255, 255, 0.1;');

      percent+=Math.floor(per);

      var req = await fetch('https://xenos-app-repository.enderkingj.repl.co/download', {
        method: 'POST',
        body: JSON.stringify(metaBody)
      });

      var res = await req.text();

      //console.log(res);

      console.log(`%c SUCCESS: ${meta.name}/${asset}\n%c${Array.from('x'.repeat(percent)).map(e=>'=').join('')}%c`, 'font-size:16px;color:white;', 'font-size:15px;color:white;', 'background: rgb(255, 255, 255, 0.1;');

      // add to FILESYSTEM ENDLESSVORTEX WHERE IS MY FILESYSTEM
      // just commit it and I will add it
      // also please just run
    }

    // ok now delete session lol

    console.log(`%c FETCH: SESSION_CLEAR\n%c${Array.from('x'.repeat(percent)).map(e=>'=').join('')}%c`, 'font-size:16px;color:white;', 'font-size:15px;color:white;', 'background: rgb(255, 255, 255, 0.1;');

    var req = await fetch('https://xenos-app-repository.enderkingj.repl.co/clear', {
      method: 'POST',
      body: JSON.stringify(metaBody)
    }); 

    percent+=20

    console.log(`%c SUCCESS: SESSION_CLEAR\n%c${Array.from('x'.repeat(percent)).map(e=>'=').join('')}%c`, 'font-size:16px;color:white;', 'font-size:15px;color:white;', 'background: rgb(255, 255, 255, 0.1;');

    console.log(`%c SUCCESS: ${meta.name} INSTALLED\n%c${Array.from('x'.repeat(percent)).map(e=>'=').join('')}%c`, 'font-size:16px;color:white;', 'font-size:15px;color:white;', 'background: rgb(255, 255, 255, 0.1;');
  }
}
