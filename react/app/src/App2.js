import React from 'react'
  
class App2 extends React.Component { 
  render() { 
    return ( 
      <div> 
        <h1>Render Props Example</h1> 
        {/* <SampleRenderProps />  */}
<SampleRenderProps2/>
      </div> 
    ) 
  } 
} 
  
// Child component getting render props 
class RenderPropsComponent extends React.Component { 
  render() { 
    return ( 
      <div> 
        <h2>I am Child Component</h2> 
        {this.props.render()} 
      </div> 
    ) 
  } 
} 
  
// Parent component sending render props to the child 
class SampleRenderProps extends React.Component { 
  render() { 
    return ( 
      <RenderPropsComponent 
        // Passing render props to the child component 
        render={() => { 
          return ( 
            <div> 
              <h3>  
               I am coming from render props  
              </h3> 
            </div> 
          ) 
        }} 
      /> 
    ) 
  } 
} 
class SampleRenderProps2 extends React.Component { 
  render() { 
    return ( 
      <RenderPropsComponent 
        // Passing render props to the child component 
        render={() => { 
          return ( 
            <div> 
              <h3>  
               I am coming from render props 2
              </h3> 
            </div> 
          ) 
        }} 
      /> 
    ) 
  } 
} 
  
  
export default App2;