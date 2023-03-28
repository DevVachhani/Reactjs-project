import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useHttp from "../../hooks/use-http";

const NewTask = (props) => {
  const { isLoading, error, sendRequest: setTasksRequest } = useHttp();

  const createTask = (taskText, taskdata) => {
    const generatedId = taskdata.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    setTasksRequest(
      {
        url: "https://react-demo-7523d-default-rtdb.firebaseio.com//tasks.json",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: { text: taskText },
      },
      createTask.bind(null, taskText)
    );
    //   setIsLoading(true);
    //   setError(null);
    //   try {
    //     const response = await fetch(
    //       "https://react-demo-7523d-default-rtdb.firebaseio.com//tasks.json",
    //       {
    //         method: "POST",
    //         body: JSON.stringify({ text: taskText }),
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       }
    //     );

    //     if (!response.ok) {
    //       throw new Error("Request failed!");
    //     }

    //     const data = await response.json();
    //   } catch (err) {
    //     setError(err.message || "Something went wrong!");
    //   }
    //   setIsLoading(false);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
