module.exports = class ServerError extends Error {
  constructor (paramName) {
    super('An error has ocurred. Please try again')
    this.name = 'ServerError'
  }
}
