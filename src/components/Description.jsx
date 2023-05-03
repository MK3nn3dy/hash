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
                        <p >This very basic hash function takes in the key to be added and the size of the hash map.
                            It then loops through the characters of the key and sums the ASCII codes. Finally it returns
                            the sum modulo the hash map size.</p><br/>
                        <p>The new element (an object containing its key AND value) is then added to an array at that index in the hash map.
                            This is done so that if two keys are hashed to the same index, they can both be stored in the array at
                            that index.
                        </p><br/>
                        <p>To retrieve an item, we hash the key we're looking for to get the index. Then we use
                            the key itself to access the element in the array at that index. This is why the key itself must be stored
                            with the value.</p><br />
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