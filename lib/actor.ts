import { Actor, HttpAgent, Identity } from '@dfinity/agent'

// @ts-ignore
import { idlFactory, _SERVICE } from './counter/counter.did'

import { BACKEND_CANISTER_ID, IC_HOST } from '../config'

export const getBackendActor = async (identity?: Identity) => {
  const agent = new HttpAgent({
    identity,
    host: IC_HOST,
  })

  await agent.fetchRootKey()

  return Actor.createActor<_SERVICE>(idlFactory, {
    agent,
    canisterId: BACKEND_CANISTER_ID!,
  })
}
