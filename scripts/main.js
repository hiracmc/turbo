
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
                  },
                  menus: {
                    FORMAT_MENU: {
                      acceptReporters: true,
                      items: ['world.afterEvents', 'lowercase']
                    }
                  }
      }
        ]
      };
    }
  
    hello() {
      return 'World!';
    }
  }
  
  Scratch.extensions.register(new HelloWorld())