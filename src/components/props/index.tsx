import { goalType } from "../../App";
import { FC } from "react";
type propsType = {
  details: goalType;
  onDelete: (id: string) => void;
};

const Goal = ({ details, onDelete }: propsType) => {
  const { id, title, description } = details;

  return (
    <>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </>
  );
};

export default Goal;
