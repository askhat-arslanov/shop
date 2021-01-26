export class Dollar {
  async makeRequest(): Promise<number> {
    return new Promise(resolve => {
      resolve(Math.floor(Math.random() * (80 - 20 + 1) + 20))
    })
  }
}
