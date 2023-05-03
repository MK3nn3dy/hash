import { useSelector } from "react-redux";
import MultipleRow from "./MultipleRow";
import SingleRow from "./SingleRow";

const HashTable = () => {

    const currentTable = useSelector((state) => state.hash);

    return (
        <div id="hash-table">
            <h2 id="hash-table-title">Hash Table</h2>
            {/* header */}
            <div className="table-head">
                <div>Index</div>
                <div>Key</div>
                <div>Value</div>
            </div>

            {
                currentTable.length > 0 ? (
                    <div className="table-scroll-rows">
                        {
                            currentTable.map((element) => {

                                if(Array.isArray(element)){
                                    return (
                                        <MultipleRow key={element.index} element={element}/>
                                    )
                                } else {
                                    return (
                                        <SingleRow key={element.index} element={element}/>
                                    )
                                }

                            })
                        }
                    </div>
                ) : (
                    <div className="no-entries-placeholder">
                        <p>No entries yet. Make an entry to get started...</p>
                    </div>
                )
            }


            

        </div>
    )

}

export default HashTable;