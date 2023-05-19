export interface ItemTodo {
  id: number;
  text: string;
  completed: boolean;
  description: string;
}

export type LoginingFormProps = {
  setSignInShow: React.Dispatch<React.SetStateAction<boolean>>;
};