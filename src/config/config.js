

class Config{
  state = {
    tokenBot: '6884974307:AAEN0vj63vJ0ntxRoVSiqSnupPg3S2h7ymc',
    host: 'https://t-bot-kik.vercel.app',
    secretHook: '/secret-code/',
  }
  get(name){
    switch(name){
      case 'token-bot':
        return this.state.tokenBot;
      case 'host':
        return this.state.host;
        default: null;
    }
  }

  getWebHookpath(name){
    switch(name){
      case 'full':
        return this.state.host + this.state.secretHook + this.state.tokenBot;
      case 'shot':
        return this.state.secretHook + this.state.tokenBot;
      default: null;
    }
  }
}

const config = new Config();

module.exports = config;