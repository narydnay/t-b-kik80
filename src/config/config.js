

class Config{
  state = {
    host: 'https://t-bot-kik.vercel.app',
    port: 5001,
    tokenBot: '6884974307:AAEN0vj63vJ0ntxRoVSiqSnupPg3S2h7ymc',
    secretHook: '/secret-code/',
    firebaseAuthConfig: {
      apiKey: "AIzaSyDArYuP8lbb94JbErr6Y3xKwQS2oPE_zTc",
      authDomain: "t-b-kik-80.firebaseapp.com",
      projectId: "t-b-kik-80",
      storageBucket: "t-b-kik-80.appspot.com",
      messagingSenderId: "513130161339",
      appId: "1:513130161339:web:10285471a898b1a7f5759e",
      measurementId: "G-D1X8CLDW6X"
    },
  }
  get(name){
    switch(name){
      case 'token-bot':
        return this.state.tokenBot;
      case 'host':
        return this.state.host;
      case 'fb-config':
        return this.state.firebaseAuthConfig;
      case 'port':
        return this.state.port;
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