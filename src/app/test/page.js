'use client'
import { useSearchParams } from "next/navigation";

const Test = () => {
  const searchParams = useSearchParams();
  const search = searchParams.getAll('name'); // Use getAll to retrieve all values for 'name'
  console.log(typeof search, search);

  return (
    <div>
      <p>{search[2]}</p>
      {search.map((elm, indx) => (
        <p key={indx}>Button name {elm}</p>
      ))}
    </div>
  );
}

export default Test;
