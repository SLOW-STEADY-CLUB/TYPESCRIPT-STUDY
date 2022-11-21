export interface TodoState {
  id: string;
  content: string;
  date: string;
  done: boolean;
}

export interface Data {
  content: string;
  date: string;
}

export type TodayList = [] | Array<TodoState>;

export const theme = {};
