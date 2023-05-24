export interface ItemTodo {
  id: number;
  text: string;
  completed: boolean;
  description: string;
}

export type LoginingFormProps = {
  setSignInShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export type SingUpProps = {
  setSignUpShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export type UserType = {
  id: string;
  login: string;
  password: string;
  created: string;
  todos: ItemTodo[] | [];
}