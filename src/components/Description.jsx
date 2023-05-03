import { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';


const Description = () => {

    // description visibility state
    const [descriptionVisible, setDescriptionVisible] = useState(false);

    const handleShowDescription = () => {
        setDescriptionVisible(!descriptionVisible);
    }

    // code snippet for hash
    const codeSnippet = `
    const hashFunction = (key, map_size) => {
        let sum = 0;
        // loop through string chars and get ASCII
        for (let i = 0; i < key.length; i++) {
            sum += key.charCodeAt(i);
        }
    
        return sum % map_size;
    };
    `;

    let customStyle = {
        backgroundColor: 'transparent'
    }

    return (
        <div id="description-panel">
            <p id="show-hide-description" onClick={handleShowDescription}>{ descriptionVisible ? "Show Code" : "Show Description"}</p>
            {
                descriptionVisible && (
                    <div id="hash-description">
                        <br />
                        <br />
                        <p >This very basic hash takes in the key to be added and the size of the hash map.
                            It then loops through the characters of the key and sums the ASCII codes. Finally it returns
                            the sum modulo the hash map size. This will be used as the index for this new item.</p><br/>
                        <p>If there is no element at the returned index in the hash map, the new element is added at that index. If there's already an element at that
                            index, the type of the element is checked. If the current element is already of type array, the new item is pushed to that
                            existing array. If the current element is a single item, a new array is created that contains the original element and the new element.
                            This array is then put at the index.
                        </p><br/>
                        <p>Items are then retrieved via their index, plus the key if the index is an array.</p><br />
                        <p></p>
                    </div>
                )
            }
            {
                !descriptionVisible && (
                    <div id="hash-description">
                        <SyntaxHighlighter language="javascript" style={okaidia} customStyle={customStyle}>
                            {codeSnippet}
                        </SyntaxHighlighter>
                    </div>
                )
            }
        </div>
    )

}

export default Description;