export interface PstState {
  ticker: string;
  name: string;
  owner: string;
  balances: {
    [address: string]: number;
  };
}

export interface PstAction {
  input: PstInput;
  caller: string;
}

export interface PstInput {
  function: PstFunction;
  target: string;
  qty: number;
  bitImage: bitMapImage;
}

export interface PstResult {
  target?: string;
  ticker?: string;
  balance?: number;
  forecast?: any;
}

export type bitMapImage = Uint8ClampedArray;

export type PstFunction = 'transfer' | 'mint' | 'balance' | 'brainFn';

export type ContractResult = { state: PstState } | { result: PstResult };
