import React, { useEffect, useState } from "react";
import "./TaskFormModal.css";

type TaskFormModalProps = {
  show: boolean;
  handleClose: () => void;
  addOrEditTask: (event: any, taskId?: number) => void;
  initialValues?: { id: number; title: string; description: string };
};

export const TaskFormModal = ({
  show,
  handleClose,
  addOrEditTask,
  initialValues,
}: TaskFormModalProps) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [title, setTitle] = React.useState(initialValues?.title ?? '');
  const [description, setDescription] = React.useState(
    initialValues?.description ?? ''
  );

  useEffect(() => {
    setIsModalOpen(show);
  }, [show]);
  // Use a hook to listen to the initial values changes here

  if (!show) return null;

  return (<>
  {isModalOpen && (
    <div className="modal">
      <section className="modal-main">
        <button
          className="close-btn"
          type="button"
          onClick= {() => setIsModalOpen(true)} 
        >
          X
        </button>
        <h3>Nouvelle tâche</h3>
        <form
          onSubmit={(e) => addOrEditTask(e, initialValues?.id)}
          className="task-form"
        >
          <label>
            <span>Titre</span>
            <input
              type="text"
              placeholder="Titre de la tâche"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Description
            <input
              type="text"
              placeholder="Description de la tâche"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <div className="form-actions">
            <button type="submit">Enregistrer</button>
            <button onClick={() => "The modal should close iteself"}>
              Annuler
            </button>
          </div>
        </form>
      </section>
    </div>
  )}
  </>
  );
};