class Config{
  state = {
    tokenBot: '6884974307:AAEN0vj63vJ0ntxRoVSiqSnupPg3S2h7ymc',

  }
  get(name){
    switch(name){
      case 'token-bot':
        return this.state.tokenBot;
        default: null;
    }
  }
}

const config = new Config();

module.exports = config;