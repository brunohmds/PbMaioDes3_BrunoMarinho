import joi from 'joi';

const userSchema = joi.object({
  firstName: joi.string().min(2).required().messages({
    'string.base': 'Texto inválido. Digite apenas letras.',
    'string.empty': 'Texto em branco. Por favor, digite seu nome.',
    'string.min': 'O nome deve ter no mínimo dois caracteres.',
    'any.required': 'O primeiro nome é obrigatório.',
  }),
  lastName: joi.string().min(2).required().messages({
    'string.base': 'Texto inválido. Digite apenas letras.',
    'string.empty': 'Texto em branco. Por favor, digite seu sobrenome.',
    'string.min': 'O sobrenome deve ter no mínimo dois caracteres.',
    'any.required': 'O sobrenome é obrigatório.',
  }),
  birthDate: joi.date().iso().required().messages({
    'date.base': 'A data de nascimento deve ser uma data válida.',
    'date.iso': 'A data de nascimento deve estar no formato AAAA-MM-DD.',
    'any.required': 'A data de nascimento é obrigatória.',
  }),
  city: joi.string().min(2).max(55).required().messages({
    'string.base': 'Texto inválido. Digite apenas letras.',
    'string.empty': 'O nome da cidade não pode estar vazio.',
    'string.min': 'O nome da cidade deve ter pelo menos 2 caracteres.',
    'string.max': 'O nome da cidade deve ter no máximo 55 caracteres.',
    'any.required': 'O nome da cidade é obrigatório.',
  }),
  country: joi.string().min(2).max(55).required().messages({
    'string.base': 'Texto inválido. Digite apenas letras.',
    'string.empty': 'O nome do país não pode estar vazio.',
    'string.min': 'O nome do país deve ter pelo menos 2 caracteres.',
    'string.max': 'O nome do país deve ter no máximo 55 caracteres.',
    'any.required': 'O nome do país é obrigatório.',
  }),
  email: joi.string().email().required().messages({
    'string.base': 'O email deve conter apenas caracteres.',
    'string.email': 'O email deve ser válido.',
    'string.empty': 'O email não pode estar vazio.',
    'any.required': 'O email é obrigatório.',
  }),
  password: joi.string().min(8).required().messages({
    'string.base': 'A senha deve ser uma string.',
    'string.empty': 'A senha não pode estar vazia.',
    'string.min': 'A senha deve ter pelo menos 8 caracteres.',
    'any.required': 'A senha é obrigatória.',
  }),
  confirmPassword: joi.string().valid(joi.ref('password')).required().messages({
    'string.base': 'A senha de confirmação deve ser uma string.',
    'string.empty': 'A senha de confirmação não pode estar vazia.',
    'any.only': 'A senha de confirmação deve ser igual à senha.',
    'any.required': 'A senha de confirmação é obrigatória.',
  }),
});

const validateUser = (userData: unknown) => {
  return userSchema.validate(userData, { abortEarly: false });
};

export { validateUser };
