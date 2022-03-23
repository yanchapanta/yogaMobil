import ReactDom from 'react-dom';

function tick() {
    // elemento con JSX
    const element = (
        // En react los elementos son inmutables
        <div>
            <h1>Hello, world!</h1>
            {/* hora local de mi pc */}
            
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    // Asi lo mostramos al contenedor con id root
    //ReactDom.render(element, document.getElementById('otherRoot'));
}
setInterval(tick, 1000)
