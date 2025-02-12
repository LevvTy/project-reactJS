import React, { useState, useEffect } from "react";

const Bai1 = () => {
  const [user, setUser] = useState([]);

  const fetchPosts = async () => {
    try {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await resp.json();
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderUserData = () => {
    return user.map((item, index) => {
      const { street, suite, city, zipcode } = item.address;
      return (
        <div key={index}>
          <p style={{ color: "blue" }}>ID: {item.id}</p>
          <p>Name: {item.name}</p>
          <p>UserName: {item.username}</p>
          <p>Email: {item.email}</p>
          <p>Address: {`${street}, ${suite}, ${city}, ${zipcode}`}</p>
        </div>
      );
    });
  };

  return (
    <div>
      {renderUserData()}
      <h2 style={{ color: "red" }}>
        {user.length > 0 ? "Data loaded successfully" : "Loading..."}
      </h2>
    </div>
  );
};

export default Bai1;
