import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .required('Por favor, informe um e-mail')
    .email('Não é um endereço de e-mail válido'),
  password: Yup.string()
    .required('Por favor, informe uma senha')
    .min(8, 'A senha deve conter 8 caracteres ou mais'),
});
