import './app.css';

function App() {

    const test = () => {
        throw new Error("ОШИБКА!!!!!!!!!!");
    }

    return (
        <div className="App">
            <h1>Hello from App!!!</h1>
            <button onClick={test}>CLick me!</button>
        </div>
    );
}

export default App;
