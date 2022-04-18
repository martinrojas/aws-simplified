import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ToDoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class ToDo {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly completed?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ToDo, ToDoMetaData>);
  static copyOf(source: ToDo, mutator: (draft: MutableModel<ToDo, ToDoMetaData>) => MutableModel<ToDo, ToDoMetaData> | void): ToDo;
}