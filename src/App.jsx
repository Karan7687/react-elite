function UserCard({ name, character, isOnline }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{character}</p>
      <p>{isOnline ? "🟢 online" : "🔴offline"}</p>
    </div>
  );
}
const App = () => {
  //main function
  return (
    <div>
      {/* div packs the code into one */}
      <h1>Dashboard</h1>

      <UserCard name="ROSS" character="Funny" isOnline={true} />
      <UserCard name="Rachael" character="Stubborn" isOnline={false} />
      {/* UserCard is function call, with parameters */}
    </div>
  );
};
export default App;
