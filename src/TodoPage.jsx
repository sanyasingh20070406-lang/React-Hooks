import { useState, useEffect } from 'react';

export default function TodoPage() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('my_router_todos');
    return saved ? JSON.parse(saved) : [{ id: 1, text: 'Learn React routing', completed: false }];
  });

  useEffect(() => {
    localStorage.setItem('my_router_todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>📝 My To-Do Application</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ padding: '8px', borderBottom: '1px solid #eee', width: '300px' }}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
