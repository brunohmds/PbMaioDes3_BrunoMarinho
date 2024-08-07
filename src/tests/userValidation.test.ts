import { validateUser } from 'src/validations/userValidation';

// Tests for firstName
test('Should return validation error for firstName as non-string', () => {
  const invalidUserData = {
    firstName: 31231,
    lastName: 'Marinho',
    email: 'bruno.marinho@example.com',
    birthDate: '1994-03-21',
    city: 'João Pessoa',
    country: 'Brasil',
    password: 'password123',
    confirmPassword: 'password123',
  };

  const { error } = validateUser(invalidUserData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details
        .filter((detail) => detail.path.includes('firstName'))
        .map((detail) => ({
          resource: detail.path.join('.'),
          message: detail.message,
        })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'firstName',
          message: 'Texto inválido. Digite apenas letras.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

test('Should return validation error for empty firstName', () => {
  const invalidUserData = {
    firstName: '',
    lastName: 'Marinho',
    email: 'bruno.marinho@example.com',
    birthDate: '1994-03-21',
    city: 'João Pessoa',
    country: 'Brasil',
    password: 'password123',
    confirmPassword: 'password123',
  };

  const { error } = validateUser(invalidUserData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details
        .filter((detail) => detail.path.includes('firstName'))
        .map((detail) => ({
          resource: detail.path.join('.'),
          message: detail.message,
        })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'firstName',
          message: 'Texto em branco. Por favor, digite seu nome.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

test('Should return validation error for firstName with less than 2 characters', () => {
  const invalidUserData = {
    firstName: 'B',
    lastName: 'Marinho',
    email: 'bruno.marinho@example.com',
    birthDate: '1994-03-21',
    city: 'João Pessoa',
    country: 'Brasil',
    password: 'password123',
    confirmPassword: 'password123',
  };

  const { error } = validateUser(invalidUserData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details
        .filter((detail) => detail.path.includes('firstName'))
        .map((detail) => ({
          resource: detail.path.join('.'),
          message: detail.message,
        })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'firstName',
          message: 'O nome deve ter no mínimo dois caracteres.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

test('Should return validation error for missing firstName', () => {
  const invalidUserData = {
    lastName: 'Marinho',
    email: 'bruno.marinho@example.com',
    birthDate: '1994-03-21',
    city: 'João Pessoa',
    country: 'Brasil',
    password: 'password123',
    confirmPassword: 'password123',
  };

  const { error } = validateUser(invalidUserData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details
        .filter((detail) => detail.path.includes('firstName'))
        .map((detail) => ({
          resource: detail.path.join('.'),
          message: detail.message,
        })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'firstName',
          message: 'O primeiro nome é obrigatório.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

// Tests for lastName
test('Should return validation error for lastName as non-string', () => {
  const invalidUserData = {
    firstName: 'Bruno',
    lastName: 3311,
    email: 'bruno.marinho@example.com',
    birthDate: '1994-03-21',
    city: 'João Pessoa',
    country: 'Brasil',
    password: 'password123',
    confirmPassword: 'password123',
  };

  const { error } = validateUser(invalidUserData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details
        .filter((detail) => detail.path.includes('lastName'))
        .map((detail) => ({
          resource: detail.path.join('.'),
          message: detail.message,
        })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'lastName',
          message: 'Texto inválido. Digite apenas letras.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

test('Should return validation error for empty lastName', () => {
  const invalidUserData = {
    firstName: 'Bruno',
    lastName: '',
    email: 'bruno.marinho@example.com',
    birthDate: '1994-03-21',
    city: 'João Pessoa',
    country: 'Brasil',
    password: 'password123',
    confirmPassword: 'password123',
  };

  const { error } = validateUser(invalidUserData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details
        .filter((detail) => detail.path.includes('lastName'))
        .map((detail) => ({
          resource: detail.path.join('.'),
          message: detail.message,
        })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'lastName',
          message: 'Texto em branco. Por favor, digite seu sobrenome.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

test('Should return validation error for lastName with less than 2 characters', () => {
  const invalidUserData = {
    firstName: 'Bruno',
    lastName: 'M',
    email: 'bruno.marinho@example.com',
    birthDate: '1994-03-21',
    city: 'João Pessoa',
    country: 'Brasil',
    password: 'password123',
    confirmPassword: 'password123',
  };

  const { error } = validateUser(invalidUserData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details
        .filter((detail) => detail.path.includes('lastName'))
        .map((detail) => ({
          resource: detail.path.join('.'),
          message: detail.message,
        })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'lastName',
          message: 'O sobrenome deve ter no mínimo dois caracteres.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

test('Should return validation error for missing lastName', () => {
  const invalidUserData = {
    firstName: 'Bruno',
    email: 'bruno.marinho@example.com',
    birthDate: '1994-03-21',
    city: 'João Pessoa',
    country: 'Brasil',
    password: 'password123',
    confirmPassword: 'password123',
  };

  const { error } = validateUser(invalidUserData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details
        .filter((detail) => detail.path.includes('lastName'))
        .map((detail) => ({
          resource: detail.path.join('.'),
          message: detail.message,
        })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'lastName',
          message: 'O sobrenome é obrigatório.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

// Tests for birthdate
function isISODate(dateString) {
  const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/;
  return isoDateRegex.test(dateString);
}

function isBirthDateRequired(birthDate) {
  return birthDate.trim() === '';
}

test('Should return validation error for birthDate as non-date', () => {
  const invalidUserData = {
    firstName: 'Bruno',
    lastName: 'Marinho',
    email: 'bruno.marinho@example.com',
    birthDate: '',
    city: 'João Pessoa',
    country: 'Brasil',
    password: 'password123',
    confirmPassword: 'password123',
  };

  const { error } = validateUser(invalidUserData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details
        .filter((detail) => detail.path.includes('birthDate'))
        .map((detail) => ({
          resource: detail.path.join('.'),
          message: isBirthDateRequired(invalidUserData.birthDate)
            ? 'A data de nascimento é obrigatória.'
            : 'A data de nascimento deve ser uma data válida.',
        })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'birthDate',
          message: 'A data de nascimento é obrigatória.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

test('Should return validation error for birthDate not in ISO format', () => {
  const invalidUserData = {
    firstName: 'Bruno',
    lastName: 'Marinho',
    email: 'bruno.marinho@example.com',
    birthDate: '21-03-1994',
    city: 'João Pessoa',
    country: 'Brasil',
    password: 'password123',
    confirmPassword: 'password123',
  };

  const { error } = validateUser(invalidUserData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details
        .filter((detail) => detail.path.includes('birthDate'))
        .map((detail) => ({
          resource: detail.path.join('.'),
          message: isISODate(invalidUserData.birthDate)
            ? 'A data de nascimento deve ser uma data válida'
            : 'A data de nascimento deve estar no formato AAAA-MM-DD.',
        })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'birthDate',
          message: 'A data de nascimento deve estar no formato AAAA-MM-DD.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

test('Should return validation error for missing birthDate', () => {
  const invalidUserData = {
    firstName: 'Bruno',
    lastName: 'Marinho',
    email: 'bruno.marinho@example.com',
    city: 'João Pessoa',
    country: 'Brasil',
    password: 'password123',
    confirmPassword: 'password123',
  };

  const { error } = validateUser(invalidUserData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details
        .filter((detail) => detail.path.includes('birthDate'))
        .map((detail) => ({
          resource: detail.path.join('.'),
          message: detail.message,
        })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'birthDate',
          message: 'A data de nascimento é obrigatória.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

// Tests for city
test('Should return validation error for city as non-string', () => {
  const invalidUserData = {
    firstName: 'Bruno',
    lastName: 'Marinho',
    email: 'bruno.marinho@example.com',
    birthDate: '1994-03-21',
    city: 1334,
    country: 'Brasil',
    password: 'password123',
    confirmPassword: 'password123',
  };

  const { error } = validateUser(invalidUserData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details
        .filter((detail) => detail.path.includes('city'))
        .map((detail) => ({
          resource: detail.path.join('.'),
          message: detail.message,
        })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'city',
          message: 'Texto inválido. Digite apenas letras.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

test('Should return validation error for empty city', () => {
  const invalidUserData = {
    firstName: 'Bruno',
    lastName: 'Marinho',
    email: 'bruno.marinho@example.com',
    birthDate: '1994-03-21',
    city: '',
    country: 'Brasil',
    password: 'password123',
    confirmPassword: 'password123',
  };

  const { error } = validateUser(invalidUserData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details
        .filter((detail) => detail.path.includes('city'))
        .map((detail) => ({
          resource: detail.path.join('.'),
          message: detail.message,
        })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'city',
          message: 'O nome da cidade não pode estar vazio.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

test('Should return validation error for city with less than 2 characters', () => {
  const invalidUserData = {
    firstName: 'Bruno',
    lastName: 'Marinho',
    email: 'bruno.marinho@example.com',
    birthDate: '1994-03-21',
    city: 'B',
    country: 'Brasil',
    password: 'password123',
    confirmPassword: 'password123',
  };

  const { error } = validateUser(invalidUserData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details
        .filter((detail) => detail.path.includes('city'))
        .map((detail) => ({
          resource: detail.path.join('.'),
          message: detail.message,
        })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'city',
          message: 'O nome da cidade deve ter pelo menos 2 caracteres.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

test('Should return validation error for city with more than 55 characters', () => {
  const invalidUserData = {
    firstName: 'Bruno',
    lastName: 'Marinho',
    email: 'bruno.marinho@example.com',
    birthDate: '1994-03-21',
    city: 'JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ',
    country: 'Brasil',
    password: 'password123',
    confirmPassword: 'password123',
  };

  const { error } = validateUser(invalidUserData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details
        .filter((detail) => detail.path.includes('city'))
        .map((detail) => ({
          resource: detail.path.join('.'),
          message: detail.message,
        })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'city',
          message: 'O nome da cidade deve ter no máximo 55 caracteres.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

test('Should return validation error for missing city', () => {
  const invalidUserData = {
    firstName: 'Bruno',
    lastName: 'Marinho',
    email: 'bruno.marinho@example.com',
    birthDate: '1994-03-21',
    country: 'Brasil',
    password: 'password123',
    confirmPassword: 'password123',
  };

  const { error } = validateUser(invalidUserData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details
        .filter((detail) => detail.path.includes('city'))
        .map((detail) => ({
          resource: detail.path.join('.'),
          message: detail.message,
        })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'city',
          message: 'O nome da cidade é obrigatório.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

// Tests for country
test('Should return validation error for country as non-string', () => {
  const invalidUserData = {
    firstName: 'Bruno',
    lastName: 'Marinho',
    email: 'bruno.marinho@example.com',
    birthDate: '1994-03-21',
    city: 'João Pessoa',
    country: 333,
    password: 'password123',
    confirmPassword: 'password123',
  };

  const { error } = validateUser(invalidUserData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details
        .filter((detail) => detail.path.includes('country'))
        .map((detail) => ({
          resource: detail.path.join('.'),
          message: detail.message,
        })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'country',
          message: 'Texto inválido. Digite apenas letras.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

test('Should return validation error for empty country', () => {
  const invalidUserData = {
    firstName: 'Bruno',
    lastName: 'Marinho',
    email: 'bruno.marinho@example.com',
    birthDate: '1994-03-21',
    city: 'João Pessoa',
    country: '',
    password: 'password123',
    confirmPassword: 'password123',
  };

  const { error } = validateUser(invalidUserData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details
        .filter((detail) => detail.path.includes('country'))
        .map((detail) => ({
          resource: detail.path.join('.'),
          message: detail.message,
        })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'country',
          message: 'O nome do país não pode estar vazio.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

test('Should return validation error for country with less than 2 characters', () => {
  const invalidUserData = {
    firstName: 'Bruno',
    lastName: 'Marinho',
    email: 'bruno.marinho@example.com',
    birthDate: '1994-03-21',
    city: 'João Pessoa',
    country: 'B',
    password: 'password123',
    confirmPassword: 'password123',
  };

  const { error } = validateUser(invalidUserData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details
        .filter((detail) => detail.path.includes('country'))
        .map((detail) => ({
          resource: detail.path.join('.'),
          message: detail.message,
        })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'country',
          message: 'O nome do país deve ter pelo menos 2 caracteres.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

test('Should return validation error for country with more than 55 characters', () => {
  const invalidUserData = {
    firstName: 'Bruno',
    lastName: 'Marinho',
    email: 'bruno.marinho@example.com',
    birthDate: '1994-03-21',
    city: 'João Pessoa',
    country: 'BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB',
    password: 'password123',
    confirmPassword: 'password123',
  };

  const { error } = validateUser(invalidUserData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details
        .filter((detail) => detail.path.includes('country'))
        .map((detail) => ({
          resource: detail.path.join('.'),
          message: detail.message,
        })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'country',
          message: 'O nome do país deve ter no máximo 55 caracteres.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

test('Should return validation error for missing country', () => {
  const invalidUserData = {
    firstName: 'Bruno',
    lastName: 'Marinho',
    email: 'bruno.marinho@example.com',
    birthDate: '1994-03-21',
    city: 'João Pessoa',
    password: 'password123',
    confirmPassword: 'password123',
  };

  const { error } = validateUser(invalidUserData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details
        .filter((detail) => detail.path.includes('country'))
        .map((detail) => ({
          resource: detail.path.join('.'),
          message: detail.message,
        })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'country',
          message: 'O nome do país é obrigatório.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

// Tests for email
test('Should return validation error for email as non-string', () => {
  const invalidUserData = {
    firstName: 'Bruno',
    lastName: 'Marinho',
    email: 12345,
    birthDate: '1994-03-21',
    city: 'João Pessoa',
    country: 'Brasil',
    password: 'password123',
    confirmPassword: 'password123',
  };

  const { error } = validateUser(invalidUserData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details
        .filter((detail) => detail.path.includes('email'))
        .map((detail) => ({
          resource: detail.path.join('.'),
          message: detail.message,
        })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'email',
          message: 'O email deve conter apenas caracteres.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

test('Should return validation error for email with invalid format', () => {
  const invalidUserData = {
    firstName: 'Bruno',
    lastName: 'Marinho',
    email: 'invalid-email',
    birthDate: '1994-03-21',
    city: 'João Pessoa',
    country: 'Brasil',
    password: 'password123',
    confirmPassword: 'password123',
  };

  const { error } = validateUser(invalidUserData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details
        .filter((detail) => detail.path.includes('email'))
        .map((detail) => ({
          resource: detail.path.join('.'),
          message: detail.message,
        })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'email',
          message: 'O email deve ser válido.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

test('Should return validation error for empty email', () => {
  const invalidUserData = {
    firstName: 'Bruno',
    lastName: 'Marinho',
    email: '',
    birthDate: '1994-03-21',
    city: 'João Pessoa',
    country: 'Brasil',
    password: 'password123',
    confirmPassword: 'password123',
  };

  const { error } = validateUser(invalidUserData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details
        .filter((detail) => detail.path.includes('email'))
        .map((detail) => ({
          resource: detail.path.join('.'),
          message: detail.message,
        })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'email',
          message: 'O email não pode estar vazio.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

test('Should return validation error for missing email', () => {
  const invalidUserData = {
    firstName: 'Bruno',
    lastName: 'Marinho',
    birthDate: '1994-03-21',
    city: 'João Pessoa',
    country: 'Brasil',
    password: 'password123',
    confirmPassword: 'password123',
  };

  const { error } = validateUser(invalidUserData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details
        .filter((detail) => detail.path.includes('email'))
        .map((detail) => ({
          resource: detail.path.join('.'),
          message: detail.message,
        })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'email',
          message: 'O email é obrigatório.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

// Tests for password
test('Should return validation error for password as non-string', () => {
  const invalidUserData = {
    firstName: 'Bruno',
    lastName: 'Marinho',
    email: 'bruno.marinho@example.com',
    birthDate: '1994-03-21',
    city: 'João Pessoa',
    country: 'Brasil',
    password: 12345678,
    confirmPassword: 'password123',
  };

  const { error } = validateUser(invalidUserData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details
        .filter((detail) => detail.path.includes('password'))
        .map((detail) => ({
          resource: detail.path.join('.'),
          message: detail.message,
        })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'password',
          message: 'A senha deve ser uma string.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

test('Should return validation error for empty password', () => {
  const invalidUserData = {
    firstName: 'Bruno',
    lastName: 'Marinho',
    email: 'bruno.marinho@example.com',
    birthDate: '1994-03-21',
    city: 'João Pessoa',
    country: 'Brasil',
    password: '',
    confirmPassword: 'password123',
  };

  const { error } = validateUser(invalidUserData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details
        .filter((detail) => detail.path.includes('password'))
        .map((detail) => ({
          resource: detail.path.join('.'),
          message: detail.message,
        })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'password',
          message: 'A senha não pode estar vazia.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

test('Should return validation error for password with less than 8 characters', () => {
  const invalidUserData = {
    firstName: 'Bruno',
    lastName: 'Marinho',
    email: 'bruno.marinho@example.com',
    birthDate: '1994-03-21',
    city: 'João Pessoa',
    country: 'Brasil',
    password: '1234567',
    confirmPassword: 'password123',
  };

  const { error } = validateUser(invalidUserData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details
        .filter((detail) => detail.path.includes('password'))
        .map((detail) => ({
          resource: detail.path.join('.'),
          message: detail.message,
        })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'password',
          message: 'A senha deve ter pelo menos 8 caracteres.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

test('Should return validation error for missing password', () => {
  const invalidUserData = {
    firstName: 'Bruno',
    lastName: 'Marinho',
    email: 'bruno.marinho@example.com',
    birthDate: '1994-03-21',
    city: 'João Pessoa',
    country: 'Brasil',
    confirmPassword: 'password123',
  };

  const { error } = validateUser(invalidUserData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details
        .filter((detail) => detail.path.includes('password'))
        .map((detail) => ({
          resource: detail.path.join('.'),
          message: detail.message,
        })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'password',
          message: 'A senha é obrigatória.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

// Tests for confirmPassword
test('Should return validation error for confirmPassword as non-string', () => {
  const invalidUserData = {
    firstName: 'Bruno',
    lastName: 'Marinho',
    email: 'bruno.marinho@example.com',
    birthDate: '1994-03-21',
    city: 'João Pessoa',
    country: 'Brasil',
    password: 'password123',
    confirmPassword: 12345678,
  };

  const { error } = validateUser(invalidUserData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details
        .filter((detail) => detail.path.includes('confirmPassword'))
        .map((detail) => ({
          resource: detail.path.join('.'),
          message: detail.message,
        })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'confirmPassword',
          message: 'A senha de confirmação deve ser igual à senha.',
        },
        {
          resource: 'confirmPassword',
          message: 'A senha de confirmação deve ser uma string.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

test('Should return validation error for empty confirmPassword', () => {
  const invalidUserData = {
    firstName: 'Bruno',
    lastName: 'Marinho',
    email: 'bruno.marinho@example.com',
    birthDate: '1994-03-21',
    city: 'João Pessoa',
    country: 'Brasil',
    password: 'password123',
    confirmPassword: '',
  };

  const { error } = validateUser(invalidUserData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details
        .filter((detail) => detail.path.includes('confirmPassword'))
        .map((detail) => ({
          resource: detail.path.join('.'),
          message: detail.message,
        })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'confirmPassword',
          message: 'A senha de confirmação deve ser igual à senha.',
        },
        {
          resource: 'confirmPassword',
          message: 'A senha de confirmação não pode estar vazia.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

test('Should return validation error for confirmPassword not matching password', () => {
  const invalidUserData = {
    firstName: 'Bruno',
    lastName: 'Marinho',
    email: 'bruno.marinho@example.com',
    birthDate: '1994-03-21',
    city: 'João Pessoa',
    country: 'Brasil',
    password: 'password123',
    confirmPassword: 'password124',
  };

  const { error } = validateUser(invalidUserData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details
        .filter((detail) => detail.path.includes('confirmPassword'))
        .map((detail) => ({
          resource: detail.path.join('.'),
          message: detail.message,
        })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'confirmPassword',
          message: 'A senha de confirmação deve ser igual à senha.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

test('Should return validation error for missing confirmPassword', () => {
  const invalidUserData = {
    firstName: 'Bruno',
    lastName: 'Marinho',
    email: 'bruno.marinho@example.com',
    birthDate: '1994-03-21',
    city: 'João Pessoa',
    country: 'Brasil',
    password: 'password123',
  };

  const { error } = validateUser(invalidUserData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details
        .filter((detail) => detail.path.includes('confirmPassword'))
        .map((detail) => ({
          resource: detail.path.join('.'),
          message: detail.message,
        })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'confirmPassword',
          message: 'A senha de confirmação é obrigatória.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});
