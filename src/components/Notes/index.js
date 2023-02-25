import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  MainContainer,
  AppContainer,
  Heading,
  Form,
  Title,
  NoteTextArea,
  AddButton,
  EmptyContainer,
  Image,
  EmptyHeading,
  Description,
  NoteList,
} from './styledComponents'

const NotesApp = () => {
  const [title, setTitle] = useState('')
  const [noteText, setNoteText] = useState('')
  const [notesList, setNotesList] = useState([])

  const renderEmptyText = () => (
    <NoteList>
      {notesList.map(eachNote => (
        <NoteItem key={eachNote.id} noteDetails={eachNote} />
      ))}
    </NoteList>
  )

  const renderEmptyNoteView = () => (
    <EmptyContainer>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <EmptyHeading>No Notes Yet</EmptyHeading>
      <Description>Notes you add will appear here </Description>
    </EmptyContainer>
  )

  const onchangeTitle = event => setTitle(event.target.value)

  const onChangeText = event => setNoteText(event.target.value)

  const onAddNote = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4,
      title,
      noteText,
    }
    setNotesList(prevNoteList => [...prevNoteList, newNote])
    setTitle('')
    setNoteText('')
  }
  return (
    <MainContainer>
      <AppContainer>
        <Heading>Notes</Heading>
        <Form onSubmit={onAddNote}>
          <Title placeholder="Title" Value={title} onChange={onchangeTitle} />
          <NoteTextArea
            placeholder="Take a note..."
            value={noteText}
            onChange={onChangeText}
          />
          <AddButton type="submit"> Add</AddButton>
        </Form>
        {notesList.length === 0 ? renderEmptyNoteView() : renderEmptyText()}
      </AppContainer>
    </MainContainer>
  )
}

export default NotesApp
