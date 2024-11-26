const HelloFunction = () => { 
    return  (
        <div> Hello function</div>
    )
}

export default HelloFunction 


interface props {
    name : string
}

export const HelloFunctionProps = ({name} : props) => {
  return (
    <div>
      hello {name}
    </div>
  )
}

