import React, { useState } from "react";
import Zoom from "@material-ui/core/Zoom";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

function AddNotesField(props) {
	const [isChecked, setIsChecked] = useState(false);
	function handleClick() {
		setIsChecked(true);
	}
	const [notesContent, setNotesContent] = React.useState({
		title: "",
		content: "",
	});
	// const [notesContentUI,setNotesContentUI] = React.useState([]);
	function handleChange(e) {
		const { name, value } = e.target;
		setNotesContent((prevNote) => {
			return {
				...prevNote,
				[name]: value,
			};
		});
		e.preventDefault();
	}
	function addNoteUI(e) {
		// we have to access this array in list
		// so we have to pass props from main app to addNotesField ,and passing our notes object to this props so that we can access this array in Notes.jsx
		props.onAdd(notesContent);
		// setNotesContentUI((preValue)=>{
		//     return [...preValue,notesContent]
		// })
		// console.log(notesContentUI);
		setNotesContent({
			title: "",
			content: "",
		});
		e.preventDefault();
	}

	return (
		<div>
			<form className='create-note'>
				<input
					style={{ display: !isChecked ? "none" : "block" }}
					name='title'
					value={notesContent.title}
					placeholder='Title'
					onChange={handleChange}
				/>
				<textarea
					name='content'
					onClick={handleClick}
					value={notesContent.content}
					placeholder='Take a note...'
                    rows={!isChecked ? '1' : '3'}
					onChange={handleChange}
				/>
				<Zoom in={isChecked} >
					<Fab
						onClick={addNoteUI}
						// style={{ display: !isChecked ? "none" : "block" }}
					>
						<AddIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	);
}

export default AddNotesField;
