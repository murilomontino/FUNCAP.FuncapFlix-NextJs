/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires

import { config } from 'dotenv'

import Server from './app/server'

config()

const begin = async () => {
  await new Server(process.env.EXPRESS_PORT).start()
  console.log(
    `Server running in --- ${process.env.NODE_ENV} --- on port ${process.env.EXPRESS_PORT}`
  )
}

begin()
