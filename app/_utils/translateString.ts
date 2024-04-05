const translate = (str: string) => {
  if (str === 'parties') {
    return 'Вечеринки';
  }

  if (str === 'business') {
    return 'Бизнес';
  }

  if (str === 'music') {
    return 'Музыка';
  }

  if (str === 'fitness') {
    return 'Фитнесс';
  }

  if (str === 'workshop') {
    return 'Воркшопы';
  }

  if (str === 'travel') {
    return 'Путешествия';
  }

  if (str === 'kids') {
    return 'Дети';
  }

  return null
};

export default translate;
