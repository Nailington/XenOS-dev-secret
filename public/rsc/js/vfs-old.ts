 private db: IDBDatabase;
  private dbName = "vfs";

  private dirs: IDBObjectStore;
  private files: IDBObjectStore;
  
  constructor(dbName: string) {
    this.dbName = dbName;

    const req = indexedDB.open(this.db);

    req.addEventListener("upgradeneeded", event => {
      const db = event.target.result;

      this.dirs = db.createObjectStore("dirs");
      this.files = db.createObjectStore("files");
    });
    req.addEventListener("success", event => {
      this.db = event.target.result;
    });
  }
  #cleanName(name: string) {
    // Don't let the user write zalgo characters
    return name.replace(/[^a-zA-Z\_\-\.]/g, "")
  }
  #getPath(path: string) {
    let split = path.split("/");

    let file = split.pop();
    let dir = split.join();
    
    return {
      file: file,
      dir: dir
    };
  }
  #getFile(path: string) {
    const { dir, file } = this.#getPath(path);
    
    return this.#cleanName(this.#getDir(dir).get(file));
  }
  #getDir(dir: string, mutable: boolean) {
    const req = this.db.transaction("files", mutable ? "readwrite" : "readonly").get(dir.startsWith("/") ? dir : `/${dir}`));

    req.onsuccess = event => return event.target.result;
  }

  // Get info
  stat(path: string) {
    return this.#getFile(path).map(file => ({
      desc: file.desc,
      date: file.date
    }));
  }
  writeFile(path: string, desc: string, content: string) {
    const { dir, file } = this.#getPath(path);

    const store = this.#getDir(dir, true);

    if (!store)
      return;
    
    store.put({
      content: content,
      desc: desc || "",
      date: Date.now
    }, file);
  }
  rm(path) {
    const { dir, file } = this.#getPath(path);
    
    const store = #getDir(dir);

    if (!store)
      return;

    this.#updateDb();
    
    this.#getDir(dir, true).delete(file);
  }
  readDir(path: string) {
    return this.#getDir(dir).getAll().map(file => file.name);
  }
  mkdir(path: string) {
    this.#updateDb(db => db.createObjectStore(path));
  }
  rmdir(path) {
    this.#updateDb(db => db.deleteObjectStore(path));
  }
  
  // Custom api components
  listAllDirs() {
    return [...this.db.objectStoreNames].join("\n");
  }