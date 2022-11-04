
// function Helloworld() {
//   return (
//     <h1>hello world</h1>
//   );
// }

// export default Helloworld;
const user = {
  firstName: 'Priya',
  lastName: 'Karthik'
};
function FormatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const Element = (
  <div>
  <h1>
    Hello, {FormatName(user)}!
  </h1>
  <h2>Good day to you</h2>
  </div>
);
export default Element;

