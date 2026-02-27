import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Title from "../componentes/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const description = searchParams.get("description");
  const title = searchParams.get("title");
  return (
    <div className="w-screen h-screen bg-slate-500  p-6 flex justify-center">
      <div className="my-4 w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            className="absolute left-0 text-slate-100"
            onClick={() => navigate(-1)}
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da tarefa</Title>
        </div>

        <div className="bg-slate-200 p-4 rounded-md ">
          <h2 className="text-xl text-slate-600 font-bold">{title}</h2>
          <p className="text-slate-600 ">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
