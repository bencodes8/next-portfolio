import { Work } from "@/types/types";

export default function Work({ job_title, start_date, end_date }: Work) {
  return (
    <li className="font-light">
      {job_title}
      <br className="sm:hidden"/>
      <span className="sm:float-right">
        {start_date} - {end_date ? end_date : "Present"}
      </span>
    </li>
  );
}
