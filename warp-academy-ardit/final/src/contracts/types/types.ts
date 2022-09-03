export interface ArditState {
  messages: Message[];
}

interface Message {
  id: number;
  creator: string;
  content: string;
  votes: {
    addresses: string[];
    status: number;
  };
}

export interface ArditAction {
  input: ArditInput;
  caller: string;
}

export interface ArditInput {
  function: ArditFunction;
  id: number;
  content: string;
  onnxInput: number;
}

export type ArditResult = Message;

export type OnnxResult = string;

export type ArditFunction = 'postMessage' | 'upvoteMessage' | 'downvoteMessage' | 'readMessage' | 'runOnnx';

export type ContractResult = { state: ArditState } | { result: ArditResult } | {result: OnnxResult};
