function UserCard({ name, surname, isOnline }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{surname}</p>
      <p>{isOnline ? "Available" : "Unavailable"}</p>
    </div>
  );
}

const App = () => {
  const users = [
    { id: 1, name: "Ross", surname: "Geller", isOnline: true },
    { id: 2, name: "Rach", surname: "Green", isOnline: false },
  ];

  return (
    <div>
      <h1>Dashboard</h1>
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
};

export default App;
