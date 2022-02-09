import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div className="App h-screen bg-blue-300 ">
      <Navbar menu_1={"About"} menu_2={"Login"} />
      <h1 className="text-2xl text-center">
        Hello from react and tailwind project
      </h1>
    </div>
  );
};

export default App;
