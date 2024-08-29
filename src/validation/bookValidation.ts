import Joi from 'joi';

export const bookSchema = Joi.object({
  title: Joi.string().min(3).required(),
  author: Joi.string().min(3).required(),
  publicationDate: Joi.date().required(),
  isbn: Joi.string().length(13).required(),
  genre: Joi.string().min(3).required(),
});
