import taskRepo from '../../persistence/task-repository'
import todos from '../../database/todos'

describe ("Task Repository Tests", () => {

  it("getAll should return all the tasks", () => {
    expect(taskRepo.getAll().length).toBe(todos.tasks.length);
  });
});
