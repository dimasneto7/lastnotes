import Actions from "./components/Action";
import Header from "./components/Header";
import Logo from "./components/Logo";
import NotesArea from "./components/NotesArea";
import Notes from "./components/Notes";

function App() {
  return (
    <div className="App">
      <Header>
        <Logo />
        <Actions />
      </Header>
      <NotesArea>
        <Notes />
      </NotesArea>
    </div>
  );
}

export default App;
