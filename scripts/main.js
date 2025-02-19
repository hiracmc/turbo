
class HelloWorld {
    getInfo() {
      return {
        id: 'sapi',
        name: ' ScriptAPI',
        blocks: [
          {
            opcode: 'hello',
            blockType: Scratch.BlockType.EVENT,
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