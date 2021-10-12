import Actions from "./components/Action";
import Header from "./components/Header";
import Logo from "./components/Logo";
import NotesArea from "./components/NotesArea";
import Notes from "./components/Notes";
import HighlightProvider from "./context/HighlightContext";
import NoteListProvider from "./context/NoteListContext";
import NoteFormProvider from "./context/NoteFormContext";

function App() {
  return (
    <NoteFormProvider>
      <NoteListProvider>
        <HighlightProvider>
          <Header>
            <Logo />
            <Actions />
          </Header>
          <NotesArea>
            <Notes />
          </NotesArea>
        </HighlightProvider>
      </NoteListProvider>
    </NoteFormProvider>
  );
}

export default App;
