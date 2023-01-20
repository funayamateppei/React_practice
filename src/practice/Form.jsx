import TextInput from './TextInput';

const Form = () => {
  return (
    <>
      <TextInput label="Name" required />
      <TextInput label="Tel" required />
      <TextInput label="Address" required />
      <TextInput label="UserName" required={false} />
    </>
  );
};

export default Form;