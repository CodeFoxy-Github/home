class Fetch {
  getInfo () {
    return {
      id: 'fetch',
      name: 'Fetch',
      blocks: [
        {
          opcode: 'get',
          blockType: Scratch.BlockType.REPORTER,
          text: 'GET [URL]',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'URL'
            }       
            {
          opcode: 'post',
          blockType: Scratch.BlockType.REPORTER,
          text: 'POST [URL]',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'URL'
            }
          }
        }
      ]
    };
  }

  get (args) {
    return fetch(args.URL)
      .then(r => r.text())
      .catch(() => '');
  }
}

Scratch.extensions.register(new Fetch());