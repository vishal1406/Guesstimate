import toast from 'react-hot-toast';

export const notifySuccessMessage = (message) => toast.success(message);

export const notifyErrorMessage = (message) => toast.error(message);

export const generateRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
}

export const getEvaluatedAndStatus = ( {_solution, value} ) => {

    let _currentRowEvaluation = [];
    let _keyBoardStatus = {};
    let flag;
    // check the status of alphabet position
    for (let i = 0; i < value.length; i++) {
        let temp = value[i];
        flag = false;
        for (let j = 0; j < _solution.length; j++) {
            if (_solution[j] === temp && i === j) {
                _currentRowEvaluation.push('exact');
                _keyBoardStatus[temp.toUpperCase()]='exact';
                _solution[j] = '*';
                flag = true;
                break;
            }

            if (_solution[j] === temp && i !== j) {
                _currentRowEvaluation.push('present');
                _keyBoardStatus[temp.toUpperCase()]='present';
                _solution[j] = '*';
                flag = true;
                break;
            }
        }
        if (!flag){
            _currentRowEvaluation.push('absent');
            _keyBoardStatus[temp.toUpperCase()]='absent';
        }
    }

    return ( {_currentRowEvaluation, _keyBoardStatus });
}