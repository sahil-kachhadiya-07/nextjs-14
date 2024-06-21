// import 'server-only'

// export async function getData () {
//   const res = await fetch('https://external-service.com/data', {
//     headers: {
//       authorization: process.env.API_KEY
//     }
//   })

//   return res.json()
// }

// Now, any Client Component that imports getData() will receive a build-time
// error explaining that this module can only be used on the server.


// The corresponding package client-only can be used to mark modules that 
// contain client-only code – for example, code that accesses the window object.