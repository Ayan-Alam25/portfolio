export type Project = {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly category: string;
  readonly image: string;
  readonly link: string;
  readonly tags: ReadonlyArray<string>; // This is the most correct type
};
