import React from 'react'
import { useRoutes } from 'react-router-dom';
import Login from './login';
import ABC from './ABC';
import ReactHook from './ReactHook';
import RequireAuth from './private/RequireAuth';
import Lead from './Lead/Lead';

export default function MyRoutes() {
    let element = useRoutes([
        {
          path: "/",
          element: <Login />,
         
        },
        {
            path: "/react1",
            element: <ABC />,
            children: [
              {
                path: "default/:id",
                element: <ReactHook />,
              }
             
            ],
          },
        { path: "/lead", element: <RequireAuth> <Lead/></RequireAuth> },
      ]);

      return element;
    
}
