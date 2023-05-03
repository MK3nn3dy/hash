const MultipleRow = ({element}) => {

    return (

        <div className="shared-index">

            {
                element.map((subelement, i) => {
                    return (
                        <div className="test-row" key={i}>
                            <div>{i == 0 ? subelement.index : ""}</div>
                            <div>{subelement.key}</div>
                            <div>{subelement.value}</div>
                        </div>
                    )  
                })
            }

        </div>

    )

}

export default MultipleRow;