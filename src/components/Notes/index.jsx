import React, { useEffect } from "react";
import { useNoteList } from "../../context/NoteListContext";
import { useHighlight } from "../../context/HighlightContext";
import Note from "../Note";

import "./styles.css";
import { useNoteForm } from "../../context/NoteFormContext";

export default function Notes() {
  const { noteList, setNoteList } = useNoteList();
  const { highlight, setHighlight } = useHighlight();
  const { setTitle, setDescription } = useNoteForm();

  useEffect(() => {
    getLocalNotes();
  }, []);

  useEffect(() => {
    if (highlight) {
      const highlightedNote = noteList.find((note) => note.id === highlight);

      setTitle(highlightedNote.title);
      setDescription(highlightedNote.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [highlight]);

  function getLocalNotes() {
    let localNotes = localStorage.getItem("notes");
    if (localNotes === null) {
      localStorage.setItem("notes", JSON.stringify([]));
    } else {
      localNotes = JSON.parse(localNotes);
      setNoteList(localNotes);
    }
  }

  return (
    <section className="notes">
      {noteList.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          description={note.description}
          highlight={highlight}
          setHighlight={setHighlight}
        />
      ))}
    </section>
  );
}
