import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { AppProvider } from "./utils/GlobalState";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
// import NoMatch from "./pages/NoMatch";
import Signup from "./pages/Signup";
import Resume from "./pages/Resume";


const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <AppProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </AppProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
