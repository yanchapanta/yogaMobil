/**
 * States React.Js
 */
function MyComponent() {
    const name = "Juan Jose"
    return (
        <div>{`Hola, ${name}`}</div>
    )
}
class MyComponent extends React.Component{
    render(){
        const name = "Juan Jose"
        return (
            <div>{`Hola, ${name}`}</div>
        )
    }
}
//Como lo cambiaras? , que pasa si tengo ahora esto
function MyInput() {
    let myInput;
    return(
        <input type="text" value={myInput} />
    )
}
/*
El estado es una variable que tiende a cambiar si el componente lopied. El cambiarlo significa
volver a renderizar el componente para actualizarlos. El virtual DOM es actualizado y el usuario los
ve reflejado inmediatamente
 */
/**
 * useState llammado Hooks
 */
import  { useState } from 'react'
function MyComponent() {
    const [name,setName]=useState('')
    return (
        <div>{`Hola, ${name}`}</div>
        )
    }
    //correcto
    const [name,setName]=useState('')
    setName('Otro nombre')
    
/**
 * this.state
 */
 class MyComponent extends React.Component{
    render(){
        constructor(){
            super();
            this.state={
                name:'JUan ortiz'
            }
        }
        return (
            const {name}=this.state
            <div>{`Hola, ${this.state.name}`}</div>
        )
    }
}
//Incorrecto
this.state.comment ='Hollo'
//corrrecto
this.setState({comment:'Hello',name:'val'})
