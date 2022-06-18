
import React from 'react'
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
   import { BrowserRouter, Routes, Route } from "react-router-dom";
   import Homepage from './pages/Homepage';
   import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Records from './pages/Records';


   const client = new ApolloClient({
     uri: "http://localhost:1337/graphql",
     cache: new InMemoryCache(),
   });
   
   function App() {
     return (
       <BrowserRouter>
         <ApolloProvider client={client}>
          <Header />
           <main className='container'>
             <Routes>
  
               <Route path="/" element={<Homepage />} />
               <Route path="/records" element={<Records />} />
             </Routes>
           </main>
           <Footer />
         </ApolloProvider>
       </BrowserRouter>
     );
   }
   
   export default App;
   