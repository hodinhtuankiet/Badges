function Button({ title }) {
        return <button>{title}</button>;
      }
      function App() {
        return (
          <div>
            <Button title="Xin chào" />
          </div>
        );
      }

      ReactDOM.render(<App />, document.getElementById("root"));
