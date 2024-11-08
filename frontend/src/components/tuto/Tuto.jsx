import "./tuto.css"

const Tuto = () => {
    return (
        <div className="tuto">
            <h1>Don’t Know how to measure your FINGERS?</h1>
            <h2>Here is how!</h2>
            <div className="steps">
                <div className="step1"><img src="/img/simi1.png" alt="" /><h1>Put a tape</h1><h1>1</h1></div>
                <div className="step2"><img src="/img/simi2.png" alt="" /><h1>Define the Line</h1><h1>2</h1></div>
                <div className="step3"><img src="/img/simi3.png" alt="" /><h1>Line it</h1><h1>3</h1></div>
                <div className="step4"><img src="/img/simi4.png" alt="" /><h1>Measure IT!</h1><h1>4</h1></div>
            </div>
        </div>
    )
}

export default Tuto