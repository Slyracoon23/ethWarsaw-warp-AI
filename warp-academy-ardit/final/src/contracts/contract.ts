import { ContractResult, ArditAction, ArditResult, ArditState } from './types/types';
import { downvoteMessage, upvoteMessage } from './actions/write/voting';
import { postMessage } from './actions/write/postMessage';
import { readMessage } from './actions/read/readMessage';
import { runOnnx } from './actions/read/runOnnx';

declare const ContractError: any;

export async function handle(state: ArditState, action: ArditAction): Promise<ContractResult> {
  const input = action.input;

  switch (input.function) {
    case 'postMessage':
      return await postMessage(state, action);
    case 'upvoteMessage':
      return await upvoteMessage(state, action);
    case 'downvoteMessage':
      return await downvoteMessage(state, action);
    case 'readMessage':
      return await readMessage(state, action);
    case 'runOnnx':
        return await runOnnx(state, action);
    default:
      throw new ContractError(`No function supplied or function not recognised: "${input.function}"`);
  }
}
