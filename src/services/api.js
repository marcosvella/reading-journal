import axios from 'axios';

const BASE_URL = 'http://localhost:5000/books';

// Listar livros
export const listBooks = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao listar livros');
  }
};

// Exibir livro por ID
export const getBookById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao exibir livro');
  }
};

// Adicionar livro
export const addBook = async (book) => {
  try {

    if (!book.title || !book.author || !book.genre || !book.readAt) {
      throw new Error('Todos os campos são obrigatórios');
    }

    const readAtDate = new Date(book.readAt);
    const currentDate = new Date();

    if (isNaN(readAtDate.getTime())) {
      throw new Error('Data de leitura inválida');
    }

    if (readAtDate > currentDate) {
      throw new Error('A data de leitura não pode ser futura');
    }

    const response = await axios.post(BASE_URL, book, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao adicionar livro');
  }
};

// Editar livro
export const updateBook = async (id, book) => {
  try {
    const response = await axios.put(`${BASE_URL}`, book, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao editar livro');
  }
};

// Remover livro
export const removeBook = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao remover livro');
  }
};