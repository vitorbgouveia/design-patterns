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

  add(log: Error) {
    this.logs.push(log.message);

    console.log(`${this.logs.join(' \n')} \n ----------------------------------`);
  }
}

export default new Logger();