const jsx = (
        <React.Fragment>
            <h1>Heading 1 </h1>    
            <h2>Heading 2 </h2>    
        </React.Fragment>
       )
       // or(
       const jsx1 = React.createElement(React.Fragment, null,
        React.createElement('h1',null,'Heading 1'),
        React.createElement('h2',null,'Heading 2')
        )
        ReactDOM.render(jsx,document.getElementById('root'))
