import BB from "./BB";

function Test(){
    console.log('test');
    return (
        <>
        <div>
            {BB({aa:10,bb:20})}
            <BB aa='10' bb='20'/>
            <h1>Test</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorum eos, et exercitationem, incidunt inventore, necessitatibus neque nisi nostrum obcaecati officia omnis pariatur? Corporis hic laborum nostrum quasi qui sit.</p>
        </div>
        </>
    )
}

export default Test;