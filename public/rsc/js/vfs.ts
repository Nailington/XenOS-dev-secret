// @ts-nocheck 

window.__XEN_WEBPACK.core.VFS = class {
  // Util
  #cleanName(name: string) {
    // Don't let the user write zalgo characters
    return name.replace(/[^a-zA-Z\_\-\.]/g, "")
  }
  #getPath(path: string) {
    let split = path.split("/");

    let file: string = split.pop() ?? "";
    let dir: string = split.join() ?? "";

    return {
      dirName: this.#cleanName(dir),
      fileName: this.#cleanName(file)
    };
  }

  // Internal
  async #getDir(dirName: string, create = true) {
    const root = await navigator.storage.getDirectory();

    if (dirName === "")
      return root;

    return await root.getDirectoryHandle(dirName, {
      create: create
    });
  }
  async #getFile(dirName: string, fileName: string, create = true) {
    const dir = await this.#getDir(dirName);

    const handle = await dir.getFileHandle(fileName, {
      create: create
    });

    return handle;
  }

  // API
  async writeFile(path, msg) {
    const { fileName, dirName } = this.#getPath(path);

    const handle = await this.#getFile(dirName, fileName);

    var write = await handle.createWritable();

    var str = await write.write(msg);

    return true;
  }
  async getFile(path) {
    const { fileName, dirName } = this.#getPath(path);

    const file = await (await this.#getFile(dirName, fileName, false)).getFile();

    console.log(file);
  }
  async mkdir(path) {
    const { dirName } = this.#getPath(path);

    await this.#getDir(path);
  }

  async remove(path) {
    const { fileName, dirName } = this.#getPath(path);

    const dir = await this.#getDir(dirName);

    await dir.removeEntry(fileName, {
      recursive: true
    });
  }
};
