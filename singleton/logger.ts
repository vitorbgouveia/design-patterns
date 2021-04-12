class Logger {
  config: { appName: string };
  logs: string[] = [];

  constructor(name = null) {
    this.config = {
      appName: name ?? 'Not configured'
    }

    console.log('Listening erros');
  }

  setName(name: string) {
    this.config.appName = name;
  }

  add(log: string) {
    this.logs.push(log);

    console.log(`${this.logs.join(' \n')} \n ----------------------------------`);
  }
}

export default new Logger();