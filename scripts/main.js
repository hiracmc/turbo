
class HelloWorld {
    getInfo() {
      return {
        id: 'sapi',
        name: ' ScriptAPI',
        blocks: [
          {
            opcode: 'hello',
            blockType: Scratch.BlockType.EVENT,
            text: '[EVE].[BA].subscribe.[EV]',
            arguments: {
                EV: {
                  type: Scratch.ArgumentType.STRING
                },
                
                EVE: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'ev'
                  },
                  BA: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'abev'


                  }
                  }
      }
        ],
                  menus: {
                    ev: {
                      acceptReporters: false,
                      items: ['world.', 'server.','system.']
                    },
                    abev: {
                    acceptreporters: false,
                    items: ['beforeEvents.','afterEvents.']
                    }
                  }
                  
      };
    }
  
    hello() {
      return 'World!';
    }
  }
  
  Scratch.extensions.register(new HelloWorld())