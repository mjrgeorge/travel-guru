import React from 'react';

const PrivateRoute = () => {
    return (
        <div>
            <h1>This is Private Route</h1>
        </div>
    );
};

export default PrivateRoute;

// let history = useHistory();
//   let location = useLocation();

//   let { from } = location.state || { from: { pathname: "/" } };
// function PrivateRoute({ children, ...rest }) {
//     return (
//       <Route
//         {...rest}
//         render={({ location }) =>
//           fakeAuth.isAuthenticated ? (
//             children
//           ) : (
//             <Redirect
//               to={{
//                 pathname: "/login",
//                 state: { from: location }
//               }}
//             />
//           )
//         }
//       />
//     );
//   }