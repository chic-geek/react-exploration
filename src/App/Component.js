import React from 'react';
import NameForm from '../NameForm';

export default function App() {
  return (
    <NameForm />
  )
}

// import React from 'react';
// import ControlledInput from '../ControlledInput';

// export default function App() {
//   const [state, setState] = React.useState({});

//   const handleInputChange = (val) => setState((prevState) => ({
//     ...prevState,
//     value: val,
//   }));

//   const handleFormSubmit = () => {
//     alert(JSON.stringify(state, null, 2))
//   }

//   return (
//     <div>
//       <form onSubmit={handleFormSubmit}>
//         <ControlledInput
//           defaultValue="John"
//           type="text"
//           placeholder="Firstname"
//           callback={val => handleInputChange(val)}
//         />
//       </form>
//     </div>
//   );
// }
