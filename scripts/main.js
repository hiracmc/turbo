
class HelloWorld {
    getInfo() {
      return {
        id: 'sapi',
        name: ' ScriptAPI',
        blocks: [
          {
            opcode: 'hello',
            blockType: Scratch.BlockType.EVENT,
            text: '[EVE].subscribe.[EV]',
            arguments: {
                EV: {
                  type: Scratch.ArgumentType.STRING
                },
                
                EVE: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'ev'
                  }
                  }
      }
        ],
                  menus: {
                    ev: {
                      acceptReporters: false,
                      items: ['world.', 'server.','system.']
                    }
                  }
      };
    }
  
    hello() {
      return 'World!';
    }
  }
  
  Scratch.extensions.register(new HelloWorld())