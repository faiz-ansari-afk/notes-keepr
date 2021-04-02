import React, { Fragment } from "react";
import { Header } from "./components/layouts/Header";
import { Footer } from "./components/layouts/Footer";
import { Notes } from "./components/Notes";
import AddNotesField from "./components/AddNotesField";
import "./App.css";

function App() {
	const [notesContentUI, setNotesContentUI] = React.useState([]);
	function addNote(notesContent) {
		setNotesContentUI((preValue) => {
			return [...preValue, notesContent];
		});
    
	}
  function deleteNote(id){
    setNotesContentUI(prevNotes=>{
      return prevNotes.filter((noteItem,index)=>{
        return index !== id
      })
    })
  }
	return (
		<Fragment>
			<Header />
			<AddNotesField onAdd={addNote} />
			{notesContentUI.map((noteItem,index) => {
				return <Notes 
        key={index}
        id={index}
        title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>;
			})}
			<Footer />
		</Fragment>
	);
}

export default App;
