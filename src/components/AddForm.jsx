import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addValue } from "../slices/HashSlice";
import { setError } from "../slices/MainSlice";
import hashFunction from '../utils/hashFunction.js';
import { updateCurrentEntry, setIsShared } from "../slices/CurrentEntrySlice";

const AddForm = () => {

    const dispatch = useDispatch();

    let currentState = useSelector((state) => state.hash);

    let enteredKey = useRef(null);
    let enteredValue = useRef(null);

    const handleSubmit = (e) => {

        // reset whether last element shares an index
        dispatch(setIsShared(false));

        e.preventDefault();

        if(!enteredKey.current.value || !enteredValue.current.value || enteredKey.current.value == "" || enteredValue.current.value == ""){
            dispatch(setError("Please provide both a key and a value to add to the hash map."));
            return;
        }
        
        let taken = false;

        currentState.map((element) =>{
            if(Array.isArray(element)){
                element.map((subelement) => {
                    if(subelement.key == enteredKey.current.value){
                        taken = true;
                    }      
                })
            } else {
                if(element.key == enteredKey.current.value)
                {
                    taken = true;
                }
            }
        })

        if(!taken){

            let index = hashFunction(enteredKey.current.value, 100);

            // before dispatching new element, check if that index has anything there.
            // if so, set shared index to true in state
            if(currentState[index] != undefined){
                dispatch(setIsShared(true))
            }

            dispatch(addValue({ index, key: enteredKey.current.value, value: enteredValue.current.value}));

            // create object for current entry state
            let currentEntryPayload = {
                currentIndex: index,
                currentKey: enteredKey.current.value,
                currentLetters: [],
                currentASCII: [],
                currentASCIITotal: 0
            }

            // loop to add current letters and ASCII total
            for(let i = 0; i < enteredKey.current.value.length; i++){
                currentEntryPayload.currentLetters.push(enteredKey.current.value[i]);
                currentEntryPayload.currentASCII.push(enteredKey.current.value.charCodeAt(i));
                currentEntryPayload.currentASCIITotal += enteredKey.current.value.charCodeAt(i);
            }

            dispatch(updateCurrentEntry(currentEntryPayload));

            enteredKey.current.value = "";
            enteredValue.current.value = "";
        } else {
            dispatch(setError("That key is already taken. Because the key is used to identify entries in the case of index collisions, duplicate keys may not be used here."))
        }

        

    }

    return (
        <form id="entry-form">
            <h2>New Entry</h2>
            <input ref={enteredKey} type="text" placeholder="key"/>
            <input ref={enteredValue} type="text" placeholder="value"/>
            <button id="submit-entry" onClick={handleSubmit}>+</button>
        </form>
    )

}

export default AddForm;