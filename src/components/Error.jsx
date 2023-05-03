import { useSelector, useDispatch } from 'react-redux';
import { setError } from "../slices/MainSlice";

const Error = () => {

    const dispatch = useDispatch();

    const error = useSelector((state) => state.main.error);

    const dismissError = (e) => {
        e.preventDefault();
        dispatch(setError(null));
    }
    if(error){
        return (
            <div id="error-box">
                <p id="error">{error}</p>
                <button id="dismiss-error" onClick={dismissError}>OK</button>
            </div>
        )
    }
    
}

export default Error;