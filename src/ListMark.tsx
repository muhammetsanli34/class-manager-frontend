import markList from "./mock/markList";
import markListHeaders from "./constants/listHeaders";

function ListMark() {
  const headers = markListHeaders.teachers;
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                <tr>
                  {headers.map((header) => (
                    <th>{header.title}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {markList.map((mark) => (
                  <tr className="border-b dark:border-neutral-500">
                    {headers.map((header) => (
                      <td className="whitespace-nowrap px-6 py-4">
                        {mark[header.key as keyof typeof mark]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListMark;
