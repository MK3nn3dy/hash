import { useSelector } from "react-redux";

const HashInfoContainer = () => {

    // current entry from state
    let currentEntryInfo = useSelector((state) => state.current);
    console.log(currentEntryInfo);

    return (
        <div id="hash-info-container">

            {/* current has info */}
            <h2 id="hash-header">The Hash Function</h2>
            <h3 id="recent-hash-header">Most Recent Hash</h3>
            {
                currentEntryInfo.currentKey ? (
                    <div id="recent-hash">
                        {currentEntryInfo.currentKey && (<p>The key you entered was: '{currentEntryInfo.currentKey}'</p>)} <br/>
                        {currentEntryInfo.currentLetters && (<p>The letters of the key [{currentEntryInfo.currentLetters.toString()}] were converted to their ASCII values [{currentEntryInfo.currentASCII.toString()}]</p>)} <br/>
                        {currentEntryInfo.currentASCIITotal && (<p>These were summed to {currentEntryInfo.currentASCIITotal}. </p>)} <br />
                        {currentEntryInfo.currentASCIITotal && <p>{currentEntryInfo.currentASCIITotal} % 100 (the hash table length) gives us the index {currentEntryInfo.currentASCIITotal % 100} </p>}
                    </div>
                ) : (
                    <div id="recent-hash">
                        <p>Your most recent hash information will appear here...</p>
                    </div>
                )
            }
            

        </div>
    )

}

export default HashInfoContainer;