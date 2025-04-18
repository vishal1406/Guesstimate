import toast from "react-hot-toast";
// Define types for the message parameter
export const notifySuccessMessage = (message: string): void =>
    //@ts-ignore
  toast.success(message);
export const notifyErrorMessage = (message: string): void =>
    //@ts-ignore
  toast.error(message);

// Define the type for the max parameter in generateRandomNumber
export const generateRandomNumber = (max: number): number => {
  return Math.floor(Math.random() * max);
};

// Define the return types of getEvaluatedAndStatus function
interface GetEvaluatedAndStatusResult {
  _currentRowEvaluation: string[];
  _keyBoardStatus: Record<string, string>;
}

// Define the parameters expected by getEvaluatedAndStatus function
interface GetEvaluatedAndStatusParams {
  _solution: string[];
  value: string;
}

export const getEvaluatedAndStatus = ({
  _solution,
  value,
}: GetEvaluatedAndStatusParams): GetEvaluatedAndStatusResult => {
  let _currentRowEvaluation: string[] = [];
  let _keyBoardStatus: Record<string, string> = {};
  let flag: boolean;
  // check the status of alphabet position
  for (let i = 0; i < value.length; i++) {
    let temp = value[i];
    flag = false;
    for (let j = 0; j < _solution.length; j++) {
      if (_solution[j] === temp && i === j) {
        _currentRowEvaluation.push("exact");
        _keyBoardStatus[temp.toUpperCase()] = "exact";
        _solution[j] = "*";
        flag = true;
        break;
      }

      if (_solution[j] === temp && i !== j) {
        _currentRowEvaluation.push("present");
        _keyBoardStatus[temp.toUpperCase()] = "present";
        _solution[j] = "*";
        flag = true;
        break;
      }
    }
    if (!flag) {
      _currentRowEvaluation.push("absent");
      _keyBoardStatus[temp.toUpperCase()] = "absent";
    }
  }
  return { _currentRowEvaluation, _keyBoardStatus };
};
