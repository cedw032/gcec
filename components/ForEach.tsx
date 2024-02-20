type ForEachProps<T> = {
  items: T[];
  children: (child: T) => JSX.Element;
};

export const ForEach = <T,>({ items, children }: ForEachProps<T>) =>
  items.map(children);
