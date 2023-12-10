function Button({ title }) {
        return <button>{title}</button>;
      }
      function App() {
        return (
          <div>
            <Button title="" />
            <Button title="ádsad" />
          </div>
        );
      }

      ReactDOM.render(<App />, document.getElementById("root"));
