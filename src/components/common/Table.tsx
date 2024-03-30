import { ReactNode } from 'react';

interface IColumn<D> {
  key: string;
  title: string;
  // children?: IColumn<D>[];
  render?: (value: unknown, record: D) => ReactNode;
}
interface ITable<D = Record<string, number | string>> {
  columns: IColumn<D>[];
  contents: D[];
  renderKey: (rowData: D) => string;
  onRowClick?: (rowData: D) => void;
}

// const getHeadDepth = (column: IColumn[]): number => {
//   return column.reduce(
//     (prev, { children }) => (children ? prev + getHeadDepth(children) : prev),
//     1
//   );
// };

const Table = <D,>({ columns, contents, renderKey, onRowClick }: ITable<D>) => {
  // const headDepth = getHeadDepth(columns);
  return (
    <div className="overflow-x-auto">
      <table className="table border-white">
        {/* head */}
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {contents.map((content) => (
            <tr
              className="cursor-pointer hover:bg-stone-700 hover:text-white"
              key={renderKey(content)}
              onClick={() => {
                onRowClick && onRowClick(content);
              }}
            >
              {columns.map((column) => {
                const value = content[
                  column.key as keyof typeof content
                ] as unknown as ReactNode;
                return (
                  <td key={column.key}>
                    {column.render ? column.render(value, content) : value}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
