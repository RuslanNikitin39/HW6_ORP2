export default function extract(character) {
    const { special } = character;
    const modProperty = [];
    for (const prop of special) {
      const {
        id, name, icon, description = 'Описание недоступно',
      } = prop;
      modProperty.push({
        id,
        name,
        icon,
        description,
      });
    }
    return modProperty;
  }