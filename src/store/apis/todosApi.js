import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({

    reducePath: 'todos',
    baseQuery: fetchBaseQuery({

        baseUrl: 'https://jsonplaceholder.typicode.com' /* /todos */
    }),

    endpoints: ( builder ) => ({

        getTodos: builder.query({

            query: () => '/todos'
        }),

        getTodo: builder.query({

            query: ( TodoId ) => `/todos/${ TodoId }`
        })
    })

});

export const { useGetTodosQuery, useGetTodoQuery } = todosApi;

// RTK Query https://www.udemy.com/course/react-cero-experto/learn/lecture/32220138#questions
// consumir API JSON Placeholder mediante custom hook https://www.udemy.com/course/react-cero-experto/learn/lecture/32220212#questions
// obtener un todo por id https://www.udemy.com/course/react-cero-experto/learn/lecture/32220308?start=15#questions
