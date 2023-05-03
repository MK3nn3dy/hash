const SingleRow = ({element}) => {

    return (
        <div className="test-row">
            <div>{element.index}</div>
            <div>{element.key}</div>
            <div>{element.value}</div>
        </div>
    )

}

export default SingleRow;