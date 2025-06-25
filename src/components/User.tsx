interface AboutProps {
  name: string;
}
const User = ({ name }: AboutProps) => {
  return (
    <>
      <div>
        <h2>Name: {name}</h2>
        <h3>Location: Pune</h3>
        <h4>Age: 22</h4>
      </div>
    </>
  );
};
export default User;
