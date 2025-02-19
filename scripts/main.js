
class HelloWorld {
    getInfo() {
      return {
        id: 'sapi',
        name: ' ScriptAPI',
        blocks: [
          {
            opcode: 'hello',
            blockType: Scratch.BlockType.REPORTER,
            text: 'import'
          }
        ]
      };
    }
  
    hello() {
      return 'World!';
    }
  }
  
  Scratch.extensions.register(new HelloWorld())