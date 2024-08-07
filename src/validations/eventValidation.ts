import joi from 'joi';
import { dayOfWeek } from 'src/enums/dayOfWeek';

const eventSchema = joi.object({
  description: joi.string().min(2).required().messages({
    'string.base': 'Texto inválido. Digite apenas caracteres.',
    'string.empty':
      'Texto em branco. Por favor, digite uma descrição para o evento.',
    'string.min': 'A descrição do evento deve ter no mínimo 2 caracteres.',
    'any.required': 'A descrição do evento é obrigatória.',
  }),
  dayOfWeek: joi
    .string()
    .valid(...Object.values(dayOfWeek))
    .required()
    .messages({
      'string.base': 'Texto inválido. Digite apenas letras.',
      'string.empty': 'Texto em branco. Por favor, digite o dia da semana.',
      'any.only':
        'O dia da semana deve ser um dos valores válidos: Domingo, Segunda-feira, Terça-feira, Quarta-feira, Quinta-feira, Sexta-feira, Sábado.',
      'any.required': 'O dia da semana é obrigatório.',
    }),
  userId: joi.string().hex().length(24).optional().messages({
    'string.base': 'O userId deve ser uma string.',
    'string.hex': 'O userId preicsa estar no formato hexadecimal.',
    'string.length': 'O userId deve ter 24 caracteres.',
  }),
});

const validateEvent = (eventData: unknown) => {
  return eventSchema.validate(eventData, { abortEarly: false });
};

export { validateEvent };
