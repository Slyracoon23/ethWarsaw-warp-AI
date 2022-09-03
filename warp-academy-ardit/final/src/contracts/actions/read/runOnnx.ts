import { ArditAction, ArditState, ContractResult } from '../../types/types';
import ort from 'onnxruntime-web';


declare const ContractError;

export const runOnnx = async (
  state: ArditState,
  { caller, input: { onnxInput } }: ArditAction
): Promise<ContractResult> => {
  // if (!onnxInput) {
  //   throw new ContractError(`Creator must provide a onnxInput.`);
  // }

 // try {
    // create a new session and load the specific model.

    // the model in this example contains a single MatMul node
    // it has 2 inputs: 'a'(float32, 3x4) and 'b'(float32, 4x3)
    // it has 1 output: 'c'(float32, 3x3)
    console.log("session created");
    const session = await ort.InferenceSession.create('../../../model/model.onnx'); 
    
    // prepare inputs. a tensor need its corresponding TypedArray as data
    const dataA = Float32Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    const dataB = Float32Array.from([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]);
    const tensorA = new ort.Tensor('float32', dataA, [3, 4]);
    const tensorB = new ort.Tensor('float32', dataB, [4, 3]);


    // prepare feeds. use model input names as keys.
    const feeds = { a: tensorA, b: tensorB };

    // feed inputs and run returns a promise
    // FIXME: Might return different type then number
    const results = session.run(feeds);

  // }
  
  // return { result: (results.c.data).toString() };
  // console.log("working");

  return { result: 'test'};
};


