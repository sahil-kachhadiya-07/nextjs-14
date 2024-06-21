// 'use client'
 
// import { useFormState } from 'react-dom'
// import  createUser  from './actions'

 
// interface FormState {
//   message: string;
// }

// // Initial state
// const initialState: FormState = {
//   message: '',
// }
 

// export default function page() {
//   const [state, formAction] = useFormState<FormState>(createUser, initialState);
 
//   return (
//     <form action={formAction}>
//       <label htmlFor="email">Email</label>
//       <input type="text" id="email" name="email" required />
//       {/* ... */}
//       <p aria-live="polite" className="sr-only">
//         {state?.message}
//       </p>
//       <button>Sign up</button>
//     </form>
//   )
// }
