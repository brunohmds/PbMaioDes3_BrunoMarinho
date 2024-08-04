import { validateEvent } from 'src/validations/eventValidation';

// Tests for description
test('Should return validation error for description as non-string', () => {
  const invalidEventData = {
    description: 133333,
    dayOfWeek: 'monday',
    userId: '123456789012345678901234',
  };

  const { error } = validateEvent(invalidEventData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details.map((detail) => ({
        resource: detail.path.join('.'),
        message: detail.message,
      })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'description',
          message: 'Texto inválido. Digite apenas caracteres.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

test('Should return validation error for empty description', () => {
  const invalidEventData = {
    description: '',
    dayOfWeek: 'monday',
    userId: '123456789012345678901234',
  };

  const { error } = validateEvent(invalidEventData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details.map((detail) => ({
        resource: detail.path.join('.'),
        message: detail.message,
      })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'description',
          message:
            'Texto em branco. Por favor, digite uma descrição para o evento.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

test('Should return validation error for description with less than 2 characters', () => {
  const invalidEventData = {
    description: 'A',
    dayOfWeek: 'monday',
    userId: '123456789012345678901234',
  };

  const { error } = validateEvent(invalidEventData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details.map((detail) => ({
        resource: detail.path.join('.'),
        message: detail.message,
      })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'description',
          message: 'A descrição do evento deve ter no mínimo 2 caracteres.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

test('Should return validation error for missing description', () => {
  const invalidEventData = {
    dayOfWeek: 'monday',
    userId: '123456789012345678901234',
  };

  const { error } = validateEvent(invalidEventData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details.map((detail) => ({
        resource: detail.path.join('.'),
        message: detail.message,
      })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'description',
          message: 'A descrição do evento é obrigatória.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

// Tests for dayOfWeek
test('Should return validation error for dayOfWeek as non-string', () => {
  const invalidEventData = {
    description: 'Event Description',
    dayOfWeek: 1123,
    userId: '123456789012345678901234',
  };

  const { error } = validateEvent(invalidEventData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details.map((detail) => ({
        resource: detail.path.join('.'),
        message: detail.message,
      })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'dayOfWeek',
          message:
            'O dia da semana deve ser um dos valores válidos: sunday, monday, tuesday, wednesday, thursday, friday, saturday.',
        },
        {
          resource: 'dayOfWeek',
          message: 'Texto inválido. Digite apenas letras.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

test('Should return validation error for empty dayOfWeek', () => {
  const invalidEventData = {
    description: 'Event Description',
    dayOfWeek: '',
    userId: '123456789012345678901234',
  };

  const { error } = validateEvent(invalidEventData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details.map((detail) => ({
        resource: detail.path.join('.'),
        message: detail.message,
      })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'dayOfWeek',
          message:
            'O dia da semana deve ser um dos valores válidos: sunday, monday, tuesday, wednesday, thursday, friday, saturday.',
        },
        {
          resource: 'dayOfWeek',
          message: 'Texto em branco. Por favor, digite o dia da semana.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

test('Should return validation error for invalid dayOfWeek', () => {
  const invalidEventData = {
    description: 'Event Description',
    dayOfWeek: 'invalidDay',
    userId: '123456789012345678901234',
  };

  const { error } = validateEvent(invalidEventData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details.map((detail) => ({
        resource: detail.path.join('.'),
        message: detail.message,
      })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'dayOfWeek',
          message:
            'O dia da semana deve ser um dos valores válidos: sunday, monday, tuesday, wednesday, thursday, friday, saturday.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

test('Should return validation error for missing dayOfWeek', () => {
  const invalidEventData = {
    description: 'Event Description',
    userId: '123456789012345678901234',
  };

  const { error } = validateEvent(invalidEventData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details.map((detail) => ({
        resource: detail.path.join('.'),
        message: detail.message,
      })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'dayOfWeek',
          message: 'O dia da semana é obrigatório.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

// Tests for userId
test('Should return validation error for userId as non-string', () => {
  const invalidEventData = {
    description: 'Event Description',
    dayOfWeek: 'monday',
    userId: 1234567890,
  };

  const { error } = validateEvent(invalidEventData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details.map((detail) => ({
        resource: detail.path.join('.'),
        message: detail.message,
      })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'userId',
          message: 'O userId deve ser uma string.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

test('Should return validation error for invalid userId format', () => {
  const invalidEventData = {
    description: 'Event Description',
    dayOfWeek: 'monday',
    userId: 'invalidUserId',
  };

  const { error } = validateEvent(invalidEventData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details.map((detail) => ({
        resource: detail.path.join('.'),
        message: detail.message,
      })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'userId',
          message: 'O userId preicsa estar no formato hexadecimal.',
        },
        {
          resource: 'userId',
          message: 'O userId deve ter 24 caracteres.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});

test('Should return validation error for userId with invalid length', () => {
  const invalidEventData = {
    description: 'Event Description',
    dayOfWeek: 'monday',
    userId: '1234567890',
  };

  const { error } = validateEvent(invalidEventData);

  if (error) {
    const formattedErrors = {
      type: 'Validation error',
      errors: error.details.map((detail) => ({
        resource: detail.path.join('.'),
        message: detail.message,
      })),
    };

    expect(formattedErrors).toEqual({
      type: 'Validation error',
      errors: [
        {
          resource: 'userId',
          message: 'O userId deve ter 24 caracteres.',
        },
      ],
    });
  } else {
    throw new Error('Expected validation error');
  }
});
