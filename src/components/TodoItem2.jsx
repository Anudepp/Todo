function TodoItem2() {
  let todoName = "Clean Lawn";
  let todoDate = "4/10/2023";

  return (
    <div className="container">
      <div className="row kg-row align-items-center">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button w-100">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;