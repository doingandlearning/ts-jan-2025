export interface WhereWhen {
  where: string;
  when: number;
}

export interface Person {
  name?: string;
  born?: WhereWhen;
  died?: WhereWhen;
}
