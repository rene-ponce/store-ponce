export const validate = (values) => {
  if (values.name.length === 0) {
    alert('Ingresa tu nombre');
    return false;
  }
  if (values.email.length === 0) {
    alert('Ingresa tu email');
    return false;
  }
  if (values.phone.length === 0) {
    alert('Ingresa tu número de teléfono');
    return false;
  }
  return true;
}