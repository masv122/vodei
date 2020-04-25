export default function getFormData(objeto) {
  let fd = new FormData();
  Object.keys(objeto).forEach((key) => fd.append(key, objeto[key]));
  return fd;
}
