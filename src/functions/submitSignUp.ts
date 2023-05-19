import axios from "axios";

export const submitSignUp: React.FormEventHandler<HTMLFormElement> = async (
  e
) => {
  e.preventDefault();
  try {
    const {data} = await axios.get('https://63fef788571200b7b7d2e115.mockapi.io/Todos');
    
  } catch (error) {
    alert(error);
  }
};
