import express from 'express';
import Book from '../models/Book';
import validate from '../middleware/validate';
import { bookSchema } from '../validation/bookValidation';

const router = express.Router();

// Crear Libro
router.post('/', validate(bookSchema), async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el libro' });
  }
});

// Leer Libros
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los libros' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Libro no encontrado' });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el libro' });
  }
});

// Actualizar Libro
router.patch('/:id', validate(bookSchema), async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBook) return res.status(404).json({ message: 'Libro no encontrado' });
    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el libro' });
  }
});

// Eliminar Libro
router.delete('/:id', async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) return res.status(404).json({ message: 'Libro no encontrado' });
    res.json({ message: 'Libro eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el libro' });
  }
});

export default router;
