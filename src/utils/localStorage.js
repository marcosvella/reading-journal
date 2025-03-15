const localStoragePrefix = '@reading-journal'

// Valida se todos as propriedades do livro foram passados
const validateBookProps = (book) => {
  if (!book.title) throw new Error('Título do livro não informado ou inválido')
  if (!book.author) throw new Error('Nome do autor não informado ou inválido')
  if (!book.genre) throw new Error('Gênero do livro não informado ou inválido')
  if (!book.date) throw new Error('Data não informada ou inválida')

  const now = new Date()
  if (now < new Date(book.date)) {
    throw new Error('Data informada ultrapassa a atual')
  }
}

// Buscar livros do Local Storage
export const getBooks = () => {
  const books = localStorage.getItem(`${localStoragePrefix}`)
  return books ? JSON.parse(books) : []
}

// Adicionar livro no Local Storage
export const addBook = (book) => {
  const books = getBooks()

  validateBookProps(book)

  const bookAlreadyExists = books.find(b => b.title.toLowerCase() == book.title.toLowerCase())
  if (bookAlreadyExists) {
    throw new Error('Livro já cadastrado. Não é permitido cadastrar o mesmo livro duas vezes')
  }

  books.push(book)
  return localStorage.setItem(`${localStoragePrefix}`, JSON.stringify(books))
}

// Remove livro da lista de lidos
export const removeBook = (title) => {
  const books = getBooks()

  if (books.length === 0) {
    throw new Error('Nenhum livro encontrado')
  }

  const index = books.findIndex(b => b.title.toLowerCase() === title.toLowerCase())

  if (index === -1) {
    throw new Error('Nenhum livro com este título encontrado')
  }

  books.splice(index, 1)
  localStorage.setItem(`${localStoragePrefix}`, JSON.stringify(books))
  return books
}